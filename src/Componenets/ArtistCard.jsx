import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./AppContext";

export default function ArtistCard({
  artistid,
  acctoken,
  artistName,
  artistImg,
  followers,
  rating,
}) {
  const navigate = useNavigate();
  const { setArtist } = useAppContext();

  const renderStars = () => {
    const stars = [];
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={"f" + i} />);
    }
    if (hasHalfStar) {
      stars.push(<BsStarHalf key="h" />);
    }
    const emptyStars = totalStars - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<BsStar key={"e" + i} />);
    }
    return stars;
  };

  return (
    <div
      className="card"
      onClick={() => {
        setArtist({ id: artistid, name: artistName });
        navigate("/albums");
      }}
    >
      <img
        className="cardimg img"
        src={artistImg}
        alt={`artistimg ${artistName}`}
      ></img>
      <div className="infowrapper">
        <div>
          <h2 className="Card-title">{artistName}</h2>
          <h4 className="Card-subtitle">{followers} followers</h4>
        </div>
        <div className="star-rating">{renderStars()}</div>
      </div>
    </div>
  );
}
