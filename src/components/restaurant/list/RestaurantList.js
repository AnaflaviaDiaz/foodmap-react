import React from 'react';
import mirafloresRestaurants from '../../../data/miraflores-restaurants.json';
import RestaurantItem from '../item/RestaurantItem';
import './RestaurantList.scss';

const RestaurantList = ({ getInformationModal, onOpenModal }) => {
  return (
    <div className="RestaurantList">
      {mirafloresRestaurants.map((restaurant) =>
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          getInformationModal={getInformationModal}
          onOpenModal={onOpenModal} />)}
    </div>
  );
};

export default RestaurantList;
