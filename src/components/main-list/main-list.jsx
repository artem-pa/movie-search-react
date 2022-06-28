import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import { Button, Loader } from "../common/common";
import Card from "../card/card";
import { http } from "../../services/services";
import "./style.css";

const MainList = () => {
  const {
    responseError,
    isLoader, setIsLoader,
    pageState, setPageState,
    mainList, setMainList,
    searchQuery
  } = useContext(AppContext);

  const handleShowMore = async () => {
    if (!mainList) return;
    setIsLoader(true);
    await http.loadAll(searchQuery, { page: pageState.current + 1 }, handleResponse);
    setPageState({ ...pageState, current: pageState.current + 1 });
  }

  const handleResponse = response => {
    setIsLoader(false);
    setMainList([...mainList, ...response.Search]);
    setIsLoader(false);
  }

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

        {
          pageState.all <= pageState.current
            ? null
            : <>
              <Button
                className="show-more"
                value="Show more!"
                onClick={handleShowMore}
              />
              <div className="main-list__footer" />
            </>
        }

      </ul>
      {
        isLoader ? <Loader /> : ''
      }

    </>
  )
}

export default MainList;