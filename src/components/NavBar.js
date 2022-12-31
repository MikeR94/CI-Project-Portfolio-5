import React from "react";
import { Navbar, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import test_avatar from "../assets/test_avatar.jpg";
import Avatar from "../components/Avatar";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const loggedInMenu = (
    <>
      <NavDropdown
        title={<Avatar src={test_avatar} height={50}></Avatar>}
        id="nav-dropdown"
      >
        {currentUser?.username}
        <NavDropdown.Item eventKey={4.1}>Home</NavDropdown.Item>
        <NavDropdown.Item eventKey={4.2}>Profile</NavDropdown.Item>
        <NavDropdown.Item eventKey={4.3}>Log Out</NavDropdown.Item>
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
