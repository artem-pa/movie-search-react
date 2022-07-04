import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, AddFavorite } from "../components";
import { AppContext } from "../../context/context";
import noImage from "../../assets/no-image.png";
import "./style.css";


const Card = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    setIsModal, setModalId
  } = useContext(AppContext);

  const handleClick = () => {
    console.log(item.imdbID);
    setIsModal(true);
    setModalId(item.imdbID);
    navigate(`./modal/${item.imdbID}`, { state: { background: location } })
  }

  return (
    <li className="movie">
      <picture className="movie__poster">
        <img
          alt={item.Title}
          src={item.Poster !== 'N/A' ? item.Poster : noImage}
        />
        <AddFavorite item={item} />
      </picture>
      <p className="movie__title">{item.Title}</p>
      <p className="movie__type">{item.Type}</p>
      <p className="movie__type">{item.Year}</p>
      <Button
        className="movie__btn"
        value="More details"
        onClick={handleClick}
      />
    </li>
  )
}

export default Card;