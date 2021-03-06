import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ModalInfo, ModalMockup } from '../../components';
import { AppContext } from '../../../context/context';
import { http } from '../../../services/services';
import './style.css';


const Modal = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const {
    isModal, setIsModal,
    modalId, setModalId,
    setIsLoader
  } = useContext(AppContext);

  useEffect(() => {
    setIsLoader(true);
    http.loadOne(modalId, setData);
    setIsLoader(false);
    return () => setModalId(null);
  }, [])

  const closeModal = () => {
    navigate(-1);
    setIsModal(false);
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div
        className={isModal ? "modal__container" : "modal__container hide"}
        onClick={e => e.stopPropagation()}
      >
        {
          !data
            ? <ModalMockup />
            : <ModalInfo data={data} />
        }

      </div>
    </div>
  )
}

export default Modal;