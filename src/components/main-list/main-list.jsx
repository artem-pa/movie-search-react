import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import { Loader } from "../common/common";
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
      <ul className={`movie-list ${isLoader ? 'no-scroll' : ''}`}>
        {
          !mainList
            ? ''
            : responseError
              ? <h1>{responseError}</h1>
              : 'Ok.'
        }
      </ul>
      {
        isLoader ? <Loader /> : ''
      }
    </>
  )
}

export default MainList;