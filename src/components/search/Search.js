import React, { useState } from 'react';
import SearchTypes from './SearchTypes/SearchTypes';
import mirafloresRestaurants from '../../data/miraflores-restaurants.json';
import './Search.scss';
import './../../scss/module/button/BadgeButton.scss';
import SearchList from './SearchList/SearchList';
import Modal from './../modal/Modal';
import SearchForm from './SearchForm/SearchForm';
import EmptyPage from '../empty-page/EmptyPage';

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

  const onSelectType = ({ name }) => {
    if (name === 'Selvática') { name = 'selvatica' }
    setRestaurantList(getRestaurantList((name).toLowerCase()));
  }

  return (
    <div className="Search">
      <SearchForm onSubmit={onSubmit} />

      <SearchTypes onSelectType={onSelectType} />

      {restaurantList.length ? (
        <>
          <h3>Resultados:</h3>
          <SearchList getInformationModal={handleInformationModal}
          onOpenModal={handleShowModal} restaurantList={restaurantList} />
        </> 
      ): (
        <div className="mt-4">
          <EmptyPage />
        </div>
      )}
      {showModal && (
        <Modal
          informationModal={informationModal}
          onCloseModal={handleShowModal} />)}
    </div>
  );
}

export default Search;
