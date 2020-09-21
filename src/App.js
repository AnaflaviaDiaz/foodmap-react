import React, { useState } from 'react';
import './App.scss';

import Toolbar from './components/toolbar/Toolbar';
import RestaurantList from './components/restaurant/list/RestaurantList';
import Modal from './components/modal/Modal';

const initialInformationItemState = {
  name: '',
  address: '',
  link: '',
  img: '',
}

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [informationModal, setInformationModal] = useState(initialInformationItemState);

  const handleShowModal = (value) => {
    setShowModal(value);
  };

  const handleInformationModal = (information) => {
    setInformationModal(information);
  };

  return (
    <div>
      <Toolbar />
      <main className="">
        <RestaurantList
          getInformationModal={handleInformationModal}
          onOpenModal={handleShowModal} />
        {showModal && (
          <Modal
            informationModal={informationModal}
            onCloseModal={handleShowModal} />)}
      </main>
    </div>
  );
}

export default App;
