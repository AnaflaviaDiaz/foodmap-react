import React from 'react';
import { ReactComponent as SadFace } from './../../assets/icons/sad.svg';

const EmptyPage = () => {
  return (
    <div className="text-center">
      <SadFace width="40px" />
      <div>
        <p>No hay resultados</p>
      </div>
    </div>
  )
};

export default EmptyPage;
