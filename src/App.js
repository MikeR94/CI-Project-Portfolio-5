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

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <ChampionSelect></ChampionSelect>}
          />
          <Route
            exact
            path="/signout"
            render={() => <h1>You have successfully signed out</h1>}
          />
          <Route
            exact
            path="/profile:id/"
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
          <Route
            exact
            path="/create"
            render={() => <ChampionCreate></ChampionCreate>}
          />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
