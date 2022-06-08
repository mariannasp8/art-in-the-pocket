import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import ProfilePicture from "../assets/images/bronzino-portrair-of-a-young-man-1530.jpg";
import SearchBar from "../components/SearchBar";
import turnerImg from "../assets/image-modules/william-turner-whalers-1845.jpg";
import ingresImg from "../assets/image-modules/jean-dominique-ingres-josephine-eleonore-marie-paulina-1951-53.jpg";
import rubensImg from "../assets/image-modules/peter-paul-rubens-rubens-helena-fourment-and-their-son-1635.jpg";
import toilImg from "../assets/image-modules/francois-boucher-the-toilette-of-venus-1751.jpg";
import PiecesCard from "../components/PiecesCard";

const StyledSearchPage = styled.div`
  margin-top: 70px;
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;

  h4 {
    font-size: 25px;
  }
  .profile-section {
    heigth: 50hw;
    width: 80vw;
    ${"" /*  border: 1px solid green; */}
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: flex-end;
    justify-content: space-between;
  }
  .welcome {
    font-size: 16px;
    margin-left: 90px;
  }
  .p {
    font-size: 12px;
  }
  .search-p {
    font-size: 14px;
    margin-bottom: -1px;
  }
  .searchDiv {
    heigth: 40hw;
    width: 80vw;
    ${"" /* border: 1px solid red; */}
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
  }
  .reservedSec {
    heigth: 40hw;
    width: 80vw;
   ${'' /*  border: 1px solid orange; */}
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-content: center;
  }
  .modules {
    padding-top: 20px;
    padding-bottom: 20px
    heigth: 20hw;
    width: 80vw;
    ${"" /* border: 1px solid green; */}
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-between;
  }
  .textInside {
    font-size: 12px;
  }
  .search-section {
    border: 1px solid red;
    heigth: 40hw;
    width: 80vw;
  }
  .pieces-list {
  }
`;

function SearchPage() {
  const [pieces, setPieces] = useState([]);
  const [searchedPieces, setSearchedPieces] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  const { user } = useContext(AuthContext);

  const getUser = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/profile/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      console.log(response.data);
      setUserInfo(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getAllPieces = async () => {
    const storedToken = localStorage.getItem("authToken");
    try {
      let response = await axios.get(
        "http://localhost:5005/api/search-pieces",
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      console.log(response.data);
      setPieces(response.data);
      setSearchedPieces(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (search) => {
    const filteredPieces = [...pieces].filter((piece) =>
      piece.author.toLowerCase().includes(search.toLowerCase())
    );
    setSearchedPieces(filteredPieces);
  };

  useEffect(() => {
    getUser();
    getAllPieces();
  }, []);

  return (
    <StyledSearchPage>
      <div>
        <section className="profile-section">
          <h5 className="welcome">
            Welcome <b>Vincent</b>
          </h5>
          <Avatar
            image={ProfilePicture}
            width="70px"
            alt="defaul profile picture"
          />
        </section>
        <div className="searchDiv">
          <h4>
            <b>Art in your Pocket</b>
          </h4>
          <p className="search-p">Do your search ...</p>
          <SearchBar handleSearch={handleSearch} />
        </div>
        <section className="reservedSec">
          <div className="modules">
            <Avatar
              image={turnerImg}
              width="50px"
              alt="defaul profile picture"
            />
            <p className="textInside">
              <b>Exhibitions</b>
            </p>
          </div>
          <div className="modules">
            <Avatar
              image={ingresImg}
              width="50px"
              alt="defaul profile picture"
            />
            <p className="textInside">
              <b>Collections</b>
            </p>
          </div>
          <div className="modules">
            <Avatar image={toilImg} width="50px" alt="defaul profile picture" />
            <p className="textInside">
              <b>Museums</b>
            </p>
          </div>
          <div className="modules">
            <Avatar
              image={rubensImg}
              width="50px"
              alt="defaul profile picture"
            />
            <p className="textInside">
              <b>Artists</b>
            </p>
          </div>
        </section>
      </div>
      <div className="pieces-list">
        {searchedPieces &&
          userInfo &&
          searchedPieces.map((item) => {
            return <PiecesCard item={item} user={userInfo} />;
          })}
      </div>
    </StyledSearchPage>
  );
}

export default SearchPage;
