import { Loader } from "../components/common/common";
import "./style.css";

const ModalMockup = () => (
  <div className="modal__body mockup">
    <picture className="modal__poster" />
    <div className="modal__about about">
      <p className="about__title">-TITLE-</p>
      <p className="about__info">
        <span className="about__rated">rated</span> <span className="about__year">year</span> <span className="about__genre">genre</span>
      </p>
      <p className="about__plot">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quos minima quod aliquam praesentium ipsam molestias facere? Fugit asperiores facere explicabo consectetur doloribus molestias ratione voluptate sed consequuntur. Debitis eos, impedit ab dolor laborum, laudantium eius ipsa quidem pariatur dolore natus obcaecati ipsum in nam, beatae nisi quos. Nisi, iusto.</p>
      <p>
        <strong>Writer:</strong> <span className="about__writer"></span>
      </p>
      <p>
        <strong>Directed by:</strong> <span className="about__director"></span>
      </p>
      <p>
        <strong>Starring:</strong> <span className="about__actors"></span>
      </p>
      <p>
        <strong>BoxOffice:</strong> <span className="about__boxOffice"></span>
      </p>
      <p>
        <strong>Awards:</strong> <span className="about__awards"></span>
      </p>
      <ul className="about__ratings"><strong>Ratings:</strong>
        <li></li><li></li><li></li>
      </ul>
    </div>

    <Loader />
  </div >
)

export default ModalMockup;