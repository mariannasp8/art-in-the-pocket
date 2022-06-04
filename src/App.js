import "./App.css";
import { Routes, Route } from "react-router-dom";
import IsPrivate from "./components/IsPrivate";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./page/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./pages/EditProfile";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import CollectionPage from "./page/CollectionPage";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <HomePage path="/" element={<HomePage />}></HomePage>
        </Route>
        <Route>
          <SignupPage path="/signup" element={<SignupPage />} />
        </Route>
        <Route>
          <SignupPage path="/login" element={<LoginPage />} />
        </Route>
        <Route>
          <ProfilePage
            path="/profile"
            element={
              <IsPrivate>
                <ProfilePage />
              </IsPrivate>
            }
          ></ProfilePage>
        </Route>
        <Route>
          <EditProfile
            path="/edit-profile"
            element={
              <IsPrivate>
                <EditProfile />
              </IsPrivate>
            }
          ></EditProfile>
        </Route>
        <Route>
          <SearchPage
            path="/search"
            element={
              <IsPrivate>
                <SearchPage />
              </IsPrivate>
            }
          ></SearchPage>
        </Route>
        <Route>
          <DetailsPage
            path="/details"
            element={
              <IsPrivate>
                <DetailsPage />
              </IsPrivate>
            }
          ></DetailsPage>
        </Route>
        <Route>
          <CollectionPage
            path="/collection"
            element={
              <IsPrivate>
                <CollectionPage />
              </IsPrivate>
            }
          ></CollectionPage>
        </Route>
        {/*   <Route>
          <CollectionDetailsPage
            path="/collection-details"
            element={
              <IsPrivate>
                <CollectionDetailsPage />
              </IsPrivate>
            }
          ></CollectionDetailsPage>
        </Route> */}
        <Route>
          <FavoritePage
            path="/favorite"
            element={
              <IsPrivate>
                <FavoritePage />
              </IsPrivate>
            }
          ></FavoritePage>
        </Route>
        {/*   <Route>
          <FavoriteDetailsPage
            path="/favorite-details"
            element={
              <IsPrivate>
                <FavoriteDetailsPage />
              </IsPrivate>
            }
          ></FavoriteDetailsPage>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
