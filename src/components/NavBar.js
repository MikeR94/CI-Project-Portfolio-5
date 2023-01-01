import React from "react";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { Link, NavLink, useHistory } from "react-router-dom";
import test_avatar from "../assets/test_avatar.jpg";
import Avatar from "../components/Avatar";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import SearchBar from "./SearchBar";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const history = useHistory();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      history.push("/signout");
    } catch (err) {
      console.log(err);
    }
  };

  const loggedInMenu = (
    <>
      <NavDropdown
        title={<Avatar src={currentUser?.profile_avatar} height={50}></Avatar>}
        id="nav-dropdown"
      >
        {currentUser?.username}
        <NavDropdown.Item as={Link} to="/">
          Home
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/profile">
          Profile
        </NavDropdown.Item>
        <NavDropdown.Item
          as={Link}
          to="/"
          onClick={() => {
            handleSignOut();
          }}
        >
          Log out
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );

  const loggedOutMenu = (
    <>
      {" "}
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar expand="md" fixed="top">
      <Container className={styles.Container}>
        <div className={`${styles.Block} ${styles.Left}`}>
          <NavLink to="/">
            <Navbar.Brand>
              <img src={logo} alt="logo" height="45" />
            </Navbar.Brand>
          </NavLink>
        </div>
        <div className={`${styles.Block} ${styles.Center}`}>
          <SearchBar></SearchBar>
        </div>
        <div className={`${styles.Block} ${styles.Right}`}>
          {currentUser ? loggedInMenu : loggedOutMenu}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
