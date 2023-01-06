import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch, Redirect } from "react-router-dom";
import SignUpForm from "./pages/auth/SignUpForm";
import "./api/axiosDefaults";
import SignInForm from "./pages/auth/SignInForm";
import ChampionSelect from "./pages/champion/ChampionSelect";
import ChampionPage from "./pages/champion/ChampionPage";
import ChampionCreate from "./pages/champion/ChampionCreate";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ChampionEdit from "./pages/champion/ChampionEdit";
import ChampionLeaderboard from "./pages/champion/ChampionLeaderboard";

function App() {
  const currentUser = useCurrentUser();
  const is_staff = currentUser?.is_staff;
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
          {is_staff ? (
            <Route
              exact
              path="/create"
              render={() => <ChampionCreate></ChampionCreate>}
            />
          ) : (
            <Redirect to="/"></Redirect>
          )}
          <Route
            exact
            path="/champion/:id/edit"
            render={() => <ChampionEdit></ChampionEdit>}
          />
          {is_staff ? (
            <Route
              exact
              path="/create"
              render={() => <ChampionCreate></ChampionCreate>}
            />
          ) : (
            <Redirect to="/"></Redirect>
          )}
          <Route
            exact
            path="/profile"
            render={() => <h1>This is the profile page</h1>}
          />
          <Route
            exact
            path="/signout"
            render={() => <h1>You have successfully signed out</h1>}
          />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
