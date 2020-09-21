import React from 'react';

const ModalContent = ({ informationModal }) => {
  const { name, address, link } = informationModal;

  return (
    <div className="p-2">
      <h2>{name}</h2>
      <h5>Dirección: {address}</h5>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver ubicación</a>
    </div>
  );
};

export default ModalContent;
