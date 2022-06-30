import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Modal } from "../components/common/common";
import MainList from "../components/main-list/main-list";



const Router = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<MainList />}>
          <Route path="modal/:id" element={<Modal />} />
        </Route>
        <Route path="my-list" element={<h1>My list</h1>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {
        background && (
          <Routes>
            <Route path="modal/:id" element={<Modal />} />
          </Routes>
        )
      }
    </>
  )
}

export default Router;