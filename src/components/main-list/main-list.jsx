import { useContext, useEffect } from "react";
import { Button, Loader, Card, Header } from "../components";
import { AppContext } from "../../context/context";
import { http, storage } from "../../services/services";
import "./style.css";

const MainList = () => {
  const {
    responseError,
    isLoader, setIsLoader,
    isModal, searchQuery,
    pageState, setPageState,
    mainList, setMainList,
    myList, setMyList
    
  } = useContext(AppContext);

  useEffect(() => {
    setMyList(storage.getStorage());
  }, [])

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
    <div className={isModal ? "blur-container" : "blur-container no-blur"}>
      <Header />
      <ul className="movie-list">
        {
          !mainList || responseError
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
    </div>
  )
}

export default MainList;