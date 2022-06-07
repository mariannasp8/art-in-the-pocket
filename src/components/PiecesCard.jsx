import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function PiecesCard({ item }) {
  const { user, storeToken } = useContext(AuthContext);
  const addToCollection = async () => {
    try {
    } catch {}
  };

  const addToFavorites = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      let response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/favorites/add-piece/${item._id}`,
        {
          headers: {
            Authorization: `Bearer ${storeToken}`,
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
      <img src={item.img} alt="pieces" width="50px" />
      <button onClick={addToCollection}>Add to Collection</button>
      <button onClick={addToFavorites}>Add to Favorites</button>
    </div>
  );
}

export default PiecesCard;
