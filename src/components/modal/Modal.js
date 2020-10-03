import React from 'react';
import '../../scss/module/modal/Modal.scss';
import ModalContent from './content/ModalContent';

const Modal = ({ informationModal, onCloseModal }) => {

  const handleShowModal = () => {
    onCloseModal(false);
  };

  return (
    <div className="Modal">
      <div className="modal-content">
        <span onClick={handleShowModal} className="close">&times;</span>
        <ModalContent className="modal-content" informationModal={informationModal} />
      </div>
    </div>
  );
};

export default Modal;
