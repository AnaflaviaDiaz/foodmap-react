import React, { useState } from 'react';
import SearchTypes from './SearchTypes/SearchTypes';
import mirafloresRestaurants from '../../data/miraflores-restaurants.json';
import './Search.scss';
import './../../scss/module/button/BadgeButton.scss';
import SearchList from './SearchList/SearchList';
import Modal from './../modal/Modal';
import SearchForm from './SearchForm/SearchForm';

const initialInformationItemState = {
  name: '',
  address: '',
  link: '',
  img: '',
}

const getRestaurantList = (text = '') => {
  return mirafloresRestaurants.filter((restaurant) => restaurant.filter.indexOf(text.toLowerCase()) > -1);
};

const Search = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [informationModal, setInformationModal] = useState(initialInformationItemState);

  const handleShowModal = (value) => {
    setShowModal(value);
  };

  const handleInformationModal = (information) => {
    setInformationModal(information);
  };

  const onSubmit = (search) => {
    setRestaurantList(getRestaurantList(search));
  };

  return (
    <div className="Search">
      <SearchForm onSubmit={onSubmit} />

      <SearchTypes />

      <h3>Resultados:</h3>
      <SearchList getInformationModal={handleInformationModal}
        onOpenModal={handleShowModal} restaurantList={restaurantList} />
      {showModal && (
        <Modal
          informationModal={informationModal}
          onCloseModal={handleShowModal} />)}
    </div>
  );
}

export default Search;
