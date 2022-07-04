import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/context";
import { storage } from "../../../services/services";
import "./style.css";

const AddFavorite = ({ item }) => {
  const { myList, setMyList } = useContext(AppContext);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(myList.findIndex(obj => obj.imdbID === item.imdbID) !== -1);
  }, [myList])

  const handleClick = () => {
    status ? storage.remove(item) : storage.add(item);
    setMyList(storage.getStorage());
  }

  return (
    <div
      className={status ? 'add added' : 'add'}
      onClick={handleClick}
    />
  )
}

export default AddFavorite;