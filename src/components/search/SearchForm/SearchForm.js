import React from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as SearchIcon } from './../../../assets/icons/loupe.svg';
import './SearchForm.scss';

const SearchForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const onSubmitForm = ({ search }) => {
    onSubmit(search);
  };

  return (
    <form className="SearchForm mb-2" onSubmit={handleSubmit((e) => onSubmitForm(e))}>
      <input type="text" placeholder="Buscar..." name="search" ref={register({ required: true, maxLength: 20 })} />
      <button>
        <SearchIcon height="30px" />
      </button>
    </form>
  );
}

export default SearchForm;
