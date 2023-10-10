import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { fetchWebApi } from "../helperfunctions";
import { useAppContext } from "../Componenets/AppContext";

import AlbumCard from "../Componenets/AlbumCard";

export default function Albums({ props }) {
  const [albums, setAlbums] = useState([]);
  // const artistImg = process.env.PUBLIC_URL + "/artistimg.jpg";
  const { artist, authParams } = useAppContext();

  async function getAlbums() {
    //loding time is needed
    // get request using Artists Id
    // ex: https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums
    // endpoint: v1/artists/${id}/albums
    const encodedSearchTerm = encodeURIComponent(artist.id);
    fetchWebApi(
      `v1/artists/${encodedSearchTerm}/albums`,
      "GET",
      authParams["access_token"]
    )
      .then((data) => setAlbums(data?.items))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getAlbums();
  }, []);

  const Albums = albums.map(
    ({ id, images, name, release_date, total_tracks, external_urls }, i) => (
      <AlbumCard
        key={i}
        albumImg={images[0].url}
        albumName={name}
        artistName={artist.name}
        releasDate={release_date}
        tracks={total_tracks}
        externalURL={external_urls.spotify}
      />
    )
  );
  return (
    <Container className="mt-5">
      <h1 className="albumspage-title">{artist.name}</h1>
      <h2 className="albumspage-subtitle">Albums</h2>
      <div className="cards-grid">{Albums}</div>
    </Container>
  );
}
