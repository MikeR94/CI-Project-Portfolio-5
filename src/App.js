// React and Router
import { Route, Switch, useLocation } from "react-router-dom";
// API
import "./api/axiosDefaults";
// Contexts
import { useCurrentUser } from "./contexts/CurrentUserContext";
// Notifications
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
// Components
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import ChampionSelect from "./pages/champion/ChampionSelect";
import ChampionPage from "./pages/champion/ChampionPage";
import ChampionCreate from "./pages/champion/ChampionCreate";
import ChampionEdit from "./pages/champion/ChampionEdit";
import ChampionLeaderboard from "./pages/champion/ChampionLeaderboard";
import ProfilePage from "./pages/profile/ProfilePage";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import SplashPage from "./pages/splash/SplashPage";
// Styles
import styles from "./App.module.css";

function App() {
  const location = useLocation();
  const currentUser = useCurrentUser();
  const is_staff = currentUser?.is_staff;

  let splashPage = true;
  let mainSite = false;

  if (location.pathname === "/") {
    splashPage = true;
    mainSite = false;
  } else {
    mainSite = true;
    splashPage = false;
  }

  return (
    <div className={styles.App}>
      {splashPage && (
        <Switch>
          <Route exact path="/" render={() => <SplashPage />} />
        </Switch>
      )}
      {mainSite && (
        <>
          <NavBar />
          <NotificationContainer />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/home" render={() => <ChampionSelect />} />
              <Route exact path="/profile/:id" render={() => <ProfilePage />} />
              <Route
                exact
                path="/leaderboard"
                render={() => <ChampionLeaderboard />}
              />
              <Route exact path="/signin" render={() => <SignIn />} />
              <Route exact path="/signup" render={() => <SignUp />} />
              <Route
                exact
                path="/champion/:id"
                render={() => <ChampionPage />}
              />
              {is_staff && (
                <Route exact path="/create" render={() => <ChampionCreate />} />
              )}
              {is_staff && (
                <Route
                  exact
                  path="/champion/:id/edit"
                  render={() => <ChampionEdit />}
                />
              )}

              <Route render={() => <PageNotFound />} />
            </Switch>
          </Container>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
