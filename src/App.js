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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />

        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
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
        <Route
          path="/collection-details"
          element={
            <IsPrivate>
              <CollectionDetailsPage />
            </IsPrivate>
          }
        />

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
        <Route>
          <FavoriteDetailsPage
            path="/favorite-details"
            element={
              <IsPrivate>
                <FavoriteDetailsPage />
              </IsPrivate>
            }
          ></FavoriteDetailsPage>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
