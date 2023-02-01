import React from "react";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import Avatar from "../components/Avatar";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import StaffCrownIcon from "../assets/staff_crown.png";
import { NotificationManager } from "react-notifications";
import UserLoggedOutImage from "../assets/user-logged-out.png";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const location = useLocation();

  const is_staff = currentUser?.is_staff;

  const history = useHistory();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
      NotificationManager.success(
        "You have successfully signed out",
        "Success!"
      );
    } catch (error) {
      console.log(error);
      NotificationManager.error("There was an issue signing you out", "Error");
    }
  };

  // if (location.pathname === "/") {
  //   return null;
  // }

  const handleGoHomePage = () => {
    if (location.pathname !== "/") {
      history.push("/");
    } else {
      window.location.reload();
    }
  };

  const loggedInMenu = (
    <>
      <NavDropdown
        title={<Avatar src={currentUser?.profile_avatar} height={50}></Avatar>}
        id="nav-dropdown"
      >
        <div className={styles.DropdownMenu}>
          {is_staff && (
            <img
              src={StaffCrownIcon}
              alt="staff crown"
              className={styles.StaffCrown}
            ></img>
          )}
          {currentUser?.username}
          <hr></hr>
        </div>
        <NavDropdown.Item className={styles.DropdownMenu} as={Link} to="/">
          Home
        </NavDropdown.Item>
        <NavDropdown.Item
          className={styles.DropdownMenu}
          as={Link}
          to={`/profile/${currentUser?.profile_id}`}
        >
          Profile
        </NavDropdown.Item>
        <NavDropdown.Item
          className={styles.DropdownMenu}
          as={Link}
          to="/leaderboard"
        >
          Leaderboard
        </NavDropdown.Item>
        {is_staff ? (
          <NavDropdown.Item
            className={styles.DropdownMenu}
            as={Link}
            to="/create"
          >
            Create
          </NavDropdown.Item>
        ) : null}
        <NavDropdown.Item
          className={styles.DropdownMenu}
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
      <NavDropdown
        title={<Avatar src={UserLoggedOutImage} height={60}></Avatar>}
        id="nav-dropdown"
      >
        <NavDropdown.Item
          className={styles.DropdownMenu}
          as={Link}
          to="/signin"
        >
          Sign In
        </NavDropdown.Item>
        <NavDropdown.Item
          className={styles.DropdownMenu}
          as={Link}
          to={`/signup`}
        >
          Sign Up
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container className={styles.Container}>
        <div className={`${styles.Block} ${styles.Left}`}>
          <Navbar.Brand>
            <img
              src={logo}
              className={styles.Logo}
              alt="logo"
              height="80"
              onClick={handleGoHomePage}
            />
          </Navbar.Brand>
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
