import React, { createContext, useContext, useState } from "react";
const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  //   const [token, setToken] = useState("I'm a token");
  const [authParams, setAuthParams] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [artists, setArtists] = useState([]);
  const [artist, setArtist] = useState({ id: "", name: "" });
  return (
    <AppContext.Provider
      value={{
        authParams,
        setAuthParams,
        searchInput,
        setSearchInput,
        artists,
        setArtists,
        artist,
        setArtist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
