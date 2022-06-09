import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useContext, useState } from "react";
import styled from "styled-components";
import heartIcon from "../assets/icons/heart.2.png";
import collectionIcon from "../assets/icons/collection.2.png";
import { Card, Carousel, Button } from "react-bootstrap";
import { CarouselCaption } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledPieaceCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-direction: center;
  align-items: center;

  .add-col-btn {
    height: 26px;
    width: 26px;
  }
  .add-fav-btn {
    height: 26px;
    width: 26px;
  }
  .btn-group {
    ${"" /* border: 1px solid red; */}
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    padding-bottom: 30px;
  }
  #modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    height: 100%;
  }
  #collection {
    position: absolute;
    top: 50%;
    left: 40%;
  }
  .image {
    border-radius: 25px;
  }
`;

function PiecesCard({ item, user }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(
    user.collections[0]._id
  );

  const addToCollection = async (collectionId, pieceId) => {
    console.log(collectionId);
    try {
      const storedToken = localStorage.getItem("authToken");
      let response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/collection/add-piece`,
        { collectionId, pieceId },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleButton = () => {
    if (!showModal) {
      setShowModal(true);
    } else {
      addToCollection(selectedCollection, item._id);
      setShowModal(false);
    }
  };

  const addToFavorites = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      let response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/favorites/add-piece/${item._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      toast.success("Add to Favorites!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelect = (e) => setSelectedCollection(e.target.value);

  return (
    <div>
      <StyledPieaceCard>
        <ToastContainer />
        <div id="img-group">
          <img className="image" src={item.img} alt="pieces" width="250px" />
          {showModal && (
            <div id="modal">
              <select name="collection" id="collection" onChange={handleSelect}>
                {user &&
                  user.collections.map((collection) => (
                    <option value={collection._id}>{collection.title}</option>
                  ))}
              </select>
            </div>
          )}
        </div>

        <div className="btn-group">
          <img
            className="add-fav-btn"
            onClick={handleButton}
            src={collectionIcon}
            alt="collection-icon"
          />

          <img
            className="add-col-btn"
            onClick={addToFavorites}
            src={heartIcon}
            alt="heart-icon"
          />
        </div>
      </StyledPieaceCard>
    </div>
  );
}

export default PiecesCard;
