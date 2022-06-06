import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CollectionCreate() {
  const [title, setTitle] = useState("");
  const [img, setImage] = useState("");

  const navigate = useNavigate();
  const handleTitle = (e) => setTitle(e.target.value);
  const handleImage = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, img };
    const getToken = localStorage.getItem("authToken");

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/create-collection`, body, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then(() => {
        setTitle("");
        setImage("");
        navigate("/collection");
        // props.refreshProjects();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Create your Collection</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label htmlFor="iamge">Image</label>
        <input type="url" name="image" value={img} onChange={handleImage} />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CollectionCreate;
