import React from 'react';
import './RestaurantItem.scss';
import '../../../scss/module/text/LinkButton.scss';

const RestaurantItem = ({ restaurant, getInformationModal, onOpenModal }) => {

  const { name, type } = restaurant;

  const setInformationModal = () => {
    getInformationModal(restaurant);
    onOpenModal(true);
  };

  return (
    <div className="m-1 item">
      <h2>{name}</h2>
      <h4>{type}</h4>
      <button type="button" onClick={setInformationModal} className="LinkButton">Más información</button>
    </div>
  );
};

export default RestaurantItem;
