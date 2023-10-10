export default function AlbumCard({
  albumImg,
  albumName,
  artistName,
  releasDate,
  tracks,
  externalURL,
}) {
  return (
    <div className="card nohove">
      <img
        className="cardimg img"
        src={albumImg}
        alt={`albumtimg ${albumName}`}
      ></img>
      <div className="infowrapper">
        <div>
          <h2 className="Card-title">{albumName}</h2>
          <h4 className="Card-subtitle">{artistName} </h4>
        </div>
        <h4 className="Card-subtitle">
          {releasDate}
          <br />
          {tracks} tracks
        </h4>
      </div>
      <a
        className="btn btn-preview"
        href={externalURL}
        target="_blank"
        rel="noreferrer"
      >
        Preview on Spotify
      </a>
    </div>
  );
}
