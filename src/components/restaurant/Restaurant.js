import React, { useState } from 'react'
import RestaurantList from './list/RestaurantList';
import Modal from '../modal/Modal';
import { ReactComponent as Logo } from './../../assets/icons/food.svg';

const initialInformationItemState = {
  name: '',
  address: '',
  link: '',
  img: '',
}

const Restaurant = () => {

  const [showModal, setShowModal] = useState(false);
  const [informationModal, setInformationModal] = useState(initialInformationItemState);

  const handleShowModal = (value) => {
    setShowModal(value);
  };

  const handleInformationModal = (information) => {
    setInformationModal(information);
  };

  return (
    <main>
      <div className="text-center">
        <Logo height="80px" />
        <h4>Encuentra restaurantes en Miraflores</h4>
      </div>

      <RestaurantList
        getInformationModal={handleInformationModal}
        onOpenModal={handleShowModal} />
      {showModal && (
        <Modal
          informationModal={informationModal}
          onCloseModal={handleShowModal} />)
      }
    </main>
  );
}

export default Restaurant;
