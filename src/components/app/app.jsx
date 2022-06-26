import { useState, useEffect } from "react";
import { AppContext } from "../../context/context";
import { scroll } from "../../services/services";
import Header from "../header/header";
import MainList from "../main-list/main-list";
import "./style.css";

const App = () => {
  const [mainList, setMainList] = useState(null);
  const [responseError, setResponseError] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isModal, setIsModal] = useState(false);

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
      isLoader, setIsLoader
    }}>
      <div className="scroll-container">
        <Header />
        <MainList />
      </div>
    </AppContext.Provider>
  )
}

export default App;