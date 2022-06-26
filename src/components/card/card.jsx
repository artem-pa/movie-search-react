import noImage from "../../assets/no-image.png";
import { Button } from "../common/common";
import "./style.css";

const Card = ({ item }) => {

  const handleClick = () => {
    console.log(item.imdbID)
  }

  return (
    <li className="movie">
      <picture className="movie__poster">
        <img
          alt={item.Title}
          src={item.Poster !== 'N/A' ? item.Poster : noImage}
        />
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