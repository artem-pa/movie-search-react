import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../context/context';
import { http } from '../../../services/services';
import ModalMockup from '../../modal-mockup/modal-mockup';
import ModalInfo from '../../modal-info/modal-info';
import './style.css';

const Modal = () => {
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