import "./App.css";
import { Routes, Route } from "react-router-dom";

import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./pages/EditProfile";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import CollectionPage from "./pages/CollectionPage";
import CollectionDetailsPage from "./pages/CollectionDetailsPage";
import FavoritePage from "./pages/FavoritePage";
import FavoriteDetailsPage from "./pages/FavoriteDetailsPage";
import NavbarBottom from "./components/NavbarBottom";
import ErrorPage from "./pages/ErrorPage";




function App() {
  return (
    <div className="App">
      <NavbarBottom />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/signup"
          element={
            //<IsAnon>
            <SignupPage />
            //</IsAnon>
          }
        />

        <Route
          path="/login"
          element={
            // <IsAnon>
            <LoginPage />
            // </IsAnon>
          }
        />
        <Route
          path="/profile"
          element={
            //<IsPrivate>
            <ProfilePage />
            // </IsPrivate>
          }
        />

        <Route
          path="/edit-profile"
          element={
            // <IsPrivate>
            <EditProfile />
            // </IsPrivate>
          }
        />

        <Route
          path="/search"
          element={
            // <IsPrivate>
            <SearchPage />
            // </IsPrivate>
          }
        />

        <Route
          path="/details"
          element={
            // <IsPrivate>
            <DetailsPage />
            // </IsPrivate>
          }
        />

        <Route
          path="/collection"
          element={
            // <IsPrivate>
            <CollectionPage />
            // </IsPrivate>
          }
        />

        <Route
          path="/collection-details"
          element={
            // <IsPrivate>
            <CollectionDetailsPage />
            // </IsPrivate>
          }
        />

        <Route
          path="/favorite"
          element={
            // <IsPrivate>
            <FavoritePage />
            // </IsPrivate>
          }
        />

        <Route
          path="/favorite-details"
          element={
            // <IsPrivate>
            <FavoriteDetailsPage />
            // </IsPrivate>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
