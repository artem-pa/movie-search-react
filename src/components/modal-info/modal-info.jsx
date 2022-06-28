import noImage from "../../assets/no-image.png";
import "./style.css";

const ModalInfo = ({ data }) => {
  return (
    <div className="modal__body">
      <picture className="modal__poster">
        <img src={data.Poster === 'N/A' ? noImage : data.Poster} alt={data.Title} />
      </picture>
      <div className="modal__about about">
        <p className="about__title">{data.Title}</p>
        <p className="about__info">
          <span className="about__rated">{data.Rated}</span> <span className="about__year">{data.Year}</span> <span className="about__genre">{data.Genre}</span>
        </p>
        <p className="about__plot">{data.Plot}</p>
        <p>
          <strong>Writer:</strong> <span className="about__writer">{data.Writer}</span>
        </p>
        <p>
          <strong>Directed by:</strong> <span className="about__director">{data.Director}</span></p>
        <p><strong>Starring:</strong> <span className="about__actors">{data.Actors}</span>
        </p>
        <p>
          <strong>BoxOffice:</strong> <span className="about__boxOffice">{data.BoxOffice}</span>
        </p>
        <p>
          <strong>Awards:</strong> <span className="about__awards">{data.Awards}</span>
        </p>
        <ul className="about__ratings"><strong>Ratings:</strong>
          {
            data.Ratings?.length < 1
              ? <li>N/A</li>
              : data.Ratings.map((rating, i) =>
                <li key={i}>{rating.Source} {rating.Value}</li>)
          }
        </ul>
      </div>
    </div >
  )
}

export default ModalInfo;