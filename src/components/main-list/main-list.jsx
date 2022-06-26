import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import { Loader } from "../common/common";
import Card from "../card/card";
import "./style.css";

const MainList = () => {
  const {
    mainList, setMainList,
    responseError, setResponseError,
    isLoader, setIsLoader
  } = useContext(AppContext);

  useEffect(() => {
    setMainList(null);
    setResponseError(null);
  }, []);

  return (
    <>
      <ul className="movie-list">
        {
          !mainList
            ? ''
            : responseError
              ? <h1>{responseError}</h1>
              : mainList.map(item => <Card item={item} key={item.imdbID} />)
        }
      </ul>
      {
        isLoader ? <Loader /> : ''
      }
    </>
  )
}

export default MainList;