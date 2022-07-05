import { useContext, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Modal, MainList, MyList } from "../components/components";
import { AppContext } from "../context/context";



const Router = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  const { isModal, setIsModal } = useContext(AppContext);

  useEffect(() => {
    if (isModal && !/modal/.test(location.pathname)) setIsModal(false);
  }, [location, isModal])


  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<MainList />} >
          <Route path="modal/:id" element={<Modal />} />
        </Route>
        <Route path="my-list" element={<MyList />}>
          <Route path="modal/:id" element={<Modal />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      {
        background && (
          <Routes>
            <Route path="/modal/:id" element={<Modal />} />
            <Route path="my-list/modal/:id" element={<Modal />} />
          </Routes>
        )
      }
    </>
  )
}

export default Router;