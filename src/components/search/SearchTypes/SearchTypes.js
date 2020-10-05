import React from 'react';
import restaurantsTypes from '../../../data/restaurant-types.json';
import './../../../scss/module/button/BadgeButton.scss';
import './SearchTypes.scss';

const SearchTypes = ({ onSelectType }) => {

  const handleClick = (type) => {
    onSelectType(type);
  }

  return (
    <div className="Types">
      <h3>Explorar restaurantes</h3>
        {restaurantsTypes.map((type) => (
          <button key={type.id} type="button" onClick={() => handleClick(type)} className="BadgeButton">{type.name}</button>
        ))}
    </div>
  );
};

export default SearchTypes;
