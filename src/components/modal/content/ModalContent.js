import React from 'react';
import '../../../scss/module/button/LinkButton.scss';

const ModalContent = ({ informationModal }) => {
  const { name, address, link } = informationModal;

  return (
    <div className="p-2">
      <h1>{name}</h1>
      <h4>Dirección: {address}</h4>
      <a href={link} className="LinkButton" target="_blank" rel="noopener noreferrer">Ver ubicación</a>
    </div>
  );
};

export default ModalContent;
