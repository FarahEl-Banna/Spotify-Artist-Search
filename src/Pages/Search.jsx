import React, { useState, useEffect } from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { fetchWebApi } from "../helperfunctions";
import "../styles.css";
import { useAppContext } from "../Componenets/AppContext";

import ArtistCard from "../Componenets/ArtistCard";

export default function Search() {
  // const [authParams, setAuthParams] = useState("");
  //const [searchInput, setSearchInput] = useState("");
  const [searchBool, setSearchBool] = useState(false);
  // const [artists, setArtists] = useState([]);
  const [query, setQuery] = useState("");

  const artistImg = process.env.PUBLIC_URL + "/artistimg.jpg"; //change img
  const {
    authParams,
    setAuthParams,
    searchInput,
    setSearchInput,
    artists,
    setArtists,
  } = useAppContext();

  const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
      const [key, value] = currentValue.split("=");
      accumulater[key] = value;
      return accumulater;
    }, {});
    return paramsSplitUp;
  };
  useEffect(() => {
    if (window.location.hash) {
      setAuthParams(getReturnedParamsFromSpotifyAuth(window.location.hash));
    }
    if (artists?.length > 0) {
      setSearchBool(true);
    }
  }, []);
  useEffect(() => {}, [authParams]);

  function handelChange(e) {
    const value = e.target.value;
    setSearchInput(value);
    if (value === "") {
      setSearchBool(false);
      setQuery([]);
    }
    // search as you type
    else {
      const encodedSearchTerm = encodeURIComponent(e.target.value);
      fetchWebApi(
        `v1/search?q=${encodedSearchTerm}&type=artist`,
        "GET",
        authParams["access_token"]
      )
        .then((data) => setQuery(data?.artists?.items))
        .catch((err) => console.log(err));
    }
  }
  async function search() {
    //loding time is needed
    if (searchInput.length > 0) {
      // get request using search to get Artists
      // endpoint: v1/search?q=${searchinput}&type=artist
      const encodedSearchTerm = encodeURIComponent(searchInput);
      fetchWebApi(
        `v1/search?q=${encodedSearchTerm}&type=artist`,
        "GET",
        authParams["access_token"]
      )
        .then((data) => setArtists(data?.artists?.items))
        .catch((err) => console.log(err));
      setQuery([]);
      setSearchBool(true);
    }
  }

  const SearchQuary = query ? (
    query?.map(({ name }, i) => {
      return (
        <div
          key={i}
          className="result-item"
          onClick={() => {
            setSearchInput(name);
            search();
          }}
        >
          {name}
        </div>
      );
    })
  ) : (
    <div></div>
  );
  const Artists = artists ? (
    artists.map(({ id, name, images, followers, popularity }, i) => {
      return (
        <ArtistCard
          key={i}
          acctoken={authParams["access_token"]}
          artistid={id}
          artistName={name}
          artistImg={images[0]?.url || artistImg}
          followers={followers.total}
          rating={popularity / 20}
        ></ArtistCard>
      );
    })
  ) : (
    <p>No artists found </p>
  );
  return (
    <Container>
      <div className="centered" style={searchBool ? { top: "10%" } : {}}>
        <InputGroup className="user-input col-6" size="lg">
          <FormControl
            className="search-input"
            placeholder="Search for an artist…"
            type="input"
            value={searchInput}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={handelChange}
          />
          <button className="btn" onClick={search}>
            <BsSearch />
          </button>
        </InputGroup>

        <div
          className="result-list col-6"
          style={query?.length > 0 ? { opacity: "1" } : {}}
        >
          {SearchQuary}
        </div>
        {searchBool && <div className="cards-grid">{Artists}</div>}
      </div>
    </Container>
  );
}

/**
 * // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'undefined';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}
 */
