import React from 'react';
import './SearchItem.scss';

const SearchItem = ({ restaurant, getInformationModal, onOpenModal }) => {
  const { id, name } = restaurant;

  const setInformationModal = () => {
    getInformationModal(restaurant);
    onOpenModal(true);
  };

  return (
    <div className="SearchItem" onClick={setInformationModal} key={id}>{name}</div>
  );
};

export default SearchItem;
