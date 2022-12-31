import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
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
        exact
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/"
      >
        <i className="fas fa-home"></i>Home
      </NavLink>
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
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <SearchBar></SearchBar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-left"></Nav>
          {currentUser ? loggedInMenu : loggedOutMenu}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
