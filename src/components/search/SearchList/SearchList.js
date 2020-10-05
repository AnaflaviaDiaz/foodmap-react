import React from 'react';
import SearchItem from '../SearchItem/SearchItem';

const SearchList = ({ restaurantList, getInformationModal, onOpenModal }) => {
  return (
    <div className="SearchList">
      {restaurantList.length ? (
        restaurantList.map((restaurant) =>
          <SearchItem key={restaurant.id} restaurant={restaurant} getInformationModal={getInformationModal}
            onOpenModal={onOpenModal} />
        )
      ) : ''}
    </div>
  );
};

export default SearchList;
