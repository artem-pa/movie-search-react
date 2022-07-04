import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";
import { storage } from "../../services/services";
import { Card, Loader } from "../components";
import "./style.css"

const MyList = () => {
  const {
    myList, setMyList,
    isLoader, isModal
  } = useContext(AppContext);

  useEffect(() => {
    setMyList(storage.getStorage());
  }, [])

  return (
    <div className={isModal ? "blur-container" : "blur-container no-blur"}>
      <div className="my-list">
        <h1 className="my-list__title">MY LIST</h1>
        <Link className="my-list-link search-link" to="/" >→ Main</Link>
        <ul className="movie-list">
          {
            myList === null
            ? ''
            : myList.length === 0
              ? <h1>List is empty. Try to add some</h1>
              : myList.map((item, i) => <Card item={item} key={item.imdbID} />)
          }
        </ul>
      </div>
      {
        isLoader ? <Loader /> : ''
      }
    </div>
  )
}

export default MyList;