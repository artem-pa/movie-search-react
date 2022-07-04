import { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../../../context/context";
import { storage } from "../../../services/services";
import "./style.css";

const AddFavorite = ({ id }) => {
  const { myList, setMyList } = useContext(AppContext);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(myList.includes(id));
  }, [myList])

  const handleClick = () => {
    console.log(status)
    status ? storage.remove(id) : storage.add(id);
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