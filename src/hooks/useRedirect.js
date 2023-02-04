import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        if (userAuthStatus === "loggedIn") {
          history.push("/home");
        }
      } catch (err) {
        if (userAuthStatus === "loggedOut") {
          history.push("/home");
        }
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};
