import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Modal } from "../components/common/common";
import Header from "../components/header/header";
import MainList from "../components/main-list/main-list";

const Router = () => (
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<MainList />} />
      <Route path="/omdb-item" element={<h1>Product</h1>} >
        <Route path=":itemId" element={<h1>Product...</h1>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
)

export default Router;