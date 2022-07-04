import { useState } from "react";
import { Card } from "../components";
import "./style.css"

const MyList = () => {
  const [myList, setMyList] = useState([]);

  return (
    <>
    <h1>MY LIST</h1>
    <ul className="movie-list">
      {
        myList.length === 0
        ? <p>List is Empty</p>
        : myList.map(item => <Card item={item} key={item.imdbID} />)
      }
    </ul>
    </>
  )
}

export default MyList;