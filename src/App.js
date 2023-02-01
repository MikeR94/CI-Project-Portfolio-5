import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./pages/auth/SignUpForm";
import "./api/axiosDefaults";
import SignInForm from "./pages/auth/SignInForm";
import ChampionSelect from "./pages/champion/ChampionSelect";
import ChampionPage from "./pages/champion/ChampionPage";
import ChampionCreate from "./pages/champion/ChampionCreate";
import ChampionEdit from "./pages/champion/ChampionEdit";
import ChampionLeaderboard from "./pages/champion/ChampionLeaderboard";
import ProfilePage from "./pages/profile/ProfilePage";
import Footer from "./components/Footer";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import PageNotFound from "./components/PageNotFound";
import SplashPage from "./pages/splash/SplashPage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <NotificationContainer />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <SplashPage></SplashPage>} />
          <Route
            exact
            path="/home"
            render={() => <ChampionSelect></ChampionSelect>}
          />
          <Route
            exact
            path="/profile/:id"
            render={() => <ProfilePage></ProfilePage>}
          />
          <Route
            exact
            path="/leaderboard"
            render={() => <ChampionLeaderboard></ChampionLeaderboard>}
          />
          <Route
            exact
            path="/signin"
            render={() => <SignInForm></SignInForm>}
          />
          <Route
            exact
            path="/signup"
            render={() => <SignUpForm></SignUpForm>}
          />
          <Route
            exact
            path="/champion/:id"
            render={() => <ChampionPage></ChampionPage>}
          />
          <Route
            exact
            path="/create"
            render={() => <ChampionCreate></ChampionCreate>}
          />

          <Route
            exact
            path="/champion/:id/edit"
            render={() => <ChampionEdit></ChampionEdit>}
          />
          <Route render={() => <PageNotFound />} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
