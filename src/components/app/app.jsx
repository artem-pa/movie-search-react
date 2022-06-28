import { useState, useEffect } from "react";
import { AppContext } from "../../context/context";
import Router from "../../router/router";
import { scroll } from "../../services/services";
import { Modal } from "../common/common";
import Header from "../header/header";
import "./style.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mainList, setMainList] = useState(null);
  const [responseError, setResponseError] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [pageState, setPageState] = useState({all: 0, current: 0});
  const [currentList, setCurrentList] = useState(null);

  useEffect(() => {
    if (isLoader || isModal) scroll.off();
    else scroll.on();
    return () => {
      scroll.on();
    }
  }, [isLoader, isModal])


  return (
    <AppContext.Provider value={{
      searchQuery, setSearchQuery,
      mainList, setMainList,
      responseError, setResponseError,
      isLoader, setIsLoader,
      isModal, setIsModal,
      modalId, setModalId,
      pageState, setPageState,
      currentList, setCurrentList
    }}>
      <div className={!isModal
        ? "blur-container no-blur" : "blur-container"}>
        <Header />
        <Router />
      </div>
      {
        isModal ? <Modal /> : null
      }
    </AppContext.Provider>
  )
}

export default App;