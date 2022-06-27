import { useState, useEffect } from "react";
import { AppContext } from "../../context/context";
import Router from "../../router/router";
import { scroll } from "../../services/services";
import { Modal } from "../common/common";
import Header from "../header/header";
import "./style.css";

const App = () => {
  const [mainList, setMainList] = useState(null);
  const [responseError, setResponseError] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalId, setModalId] = useState(null);

  useEffect(() => {
    if (isLoader || isModal) scroll.off();
    else scroll.on();
    return () => {
      scroll.on();
    }
  }, [isLoader, isModal])


  return (
    <AppContext.Provider value={{
      mainList, setMainList,
      responseError, setResponseError,
      isLoader, setIsLoader,
      isModal, setIsModal,
      modalId, setModalId
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