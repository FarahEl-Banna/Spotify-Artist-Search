import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { generateRandomString } from "../helperfunctions";
import "../styles.css";

export default function Login() {
  const logo = process.env.PUBLIC_URL + "/Spotify logo.png";

  // const navigate = useNavigate();

  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_ID;
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/search";
  const STATE = generateRandomString(16);
  const SPACE_DELIMITER = "%20";
  const SCOPES = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "playlist-read-private",
  ];
  const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

  localStorage.setItem("stateKey", STATE);
  var url = SPOTIFY_AUTHORIZE_ENDPOINT;
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(CLIENT_ID);
  url += "&scope=" + encodeURIComponent(SCOPES_URL_PARAM);
  url += "&redirect_uri=" + encodeURIComponent(REDIRECT_URL_AFTER_LOGIN);
  url += "&state=" + encodeURIComponent(STATE);
  const RequestAccsessToken = () => {
    window.location = url;
  };

  return (
    <Container>
      <div className="centered">
        <button className="user-input col-6" onClick={RequestAccsessToken}>
          <span className="loginbtn">Login </span>
          <div className="logoimg">
            <img src={logo} className="img" alt="spotify logo"></img>
          </div>
        </button>
      </div>
    </Container>
  );
}

/**
 *https://accounts.spotify.com/authorize?
 response_type=token
 &client_id=undefined
 &scope=user-read-currently-playing%2520user-read-playback-state%2520playlist-read-private
 &redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fsearch
 &state=v05vGpOIDJIgC449
 */
