import { useState } from "react";
import { AppContext } from "../../context/context";
import Header from "../header/header";
import MainList from "../main-list/main-list";
import "./style.css";

const App = () => {
  const [mainList, setMainList] = useState(null);
  const [responseError, setResponseError] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isModal, setIsModal] = useState(false);

  return (
    <AppContext.Provider value={{
      mainList, setMainList,
      responseError, setResponseError,
      isLoader, setIsLoader
    }}>
      <Header />
      <MainList />
    </AppContext.Provider>
  )
}

export default App;