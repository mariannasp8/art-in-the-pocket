import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useContext, useState } from "react";
import styled from "styled-components";
import { Card, Carousel, Button } from "react-bootstrap";
import { CarouselCaption } from "reactstrap";

const StyledPieaceCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-direction: center;
  align-items: center;

  .add-col-btn {
    height: 30px;
    width: 60px;
    font-size: 9px;
    background-color: ${({ theme }) => theme.colors.black || "#000000"};
    border-style: none;
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
    border-radius: 8px;
    padding: 80px 20px 80px 20;
  }
  .add-fav-btn {
    height: 30px;
    width: 60px;
    font-size: 9px;
    background-color: ${({ theme }) => theme.colors.black || "#000000"};
    border-style: none;
    color: ${({ theme }) => theme.colors.white || " #ffffff"};
    border-radius: 8px;
    padding: 80px 20px 80px 20;
  }
  .btn-group {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 30px;
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
`;

function PiecesCard({ item, user }) {
  const [showModal, setShowModal] = useState(false);

  const addToCollection = async () => {
    try {
    } catch {}
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
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <StyledPieaceCard>
        <div id="img-group">
          <img src={item.img} alt="pieces" width="200px" />
          {showModal && (
            <div id="modal">
              <select name="collection" id="collection">
                {user &&
                  user.collections.map((collection) => (
                    <option value={collection._id}>{collection.title}</option>
                  ))}
              </select>
            </div>
          )}
        </div>

        <div className="btn-group">
          <button
            className="add-col-btn"
            onClick={() => setShowModal(!showModal)}
          >
            Add to Collection
          </button>
          <button className="add-fav-btn" onClick={addToFavorites}>
            Add to Favorites
          </button>
        </div>
      </StyledPieaceCard>
    </div>
  );
}

export default PiecesCard;

{
  /* <div className="mainHome container">
<StyledPieaceCard>
  <Carousel>
    <Carousel.Item>
      <img src={item.img} alt="pieces" width="200px" />
    </Carousel.Item>
    <CarouselCaption>
      <button className="add-col-btn" onClick={addToCollection}>
        Add to Collection
      </button>
      <button className="add-fav-btn" onClick={addToFavorites}>
        Add to Favorites
      </button>
    </CarouselCaption>
  </Carousel>
</StyledPieaceCard>
</div> */
}
