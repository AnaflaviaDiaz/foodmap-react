import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ReactComponent as SearchIcon } from './../../assets/icons/loupe.svg';
import { ReactComponent as BackIcon } from './../../assets/icons/back-button.svg';
import './Toolbar.scss';

const Toolbar = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const goBack = () => {
    history.goBack();
  };

  const goToSearch = () => {
    history.push('/search');
  }

  return (
    <header className="Toolbar">
      <div className="toolbar-search">
        {pathname === '/search' ?
          (
            <div style={{float: 'left'}} onClick={goBack}>
              <BackIcon height="35px" />
            </div>
          ) :
          (
            <div style={{float: 'right'}} onClick={goToSearch}>
              <SearchIcon height="30px" />
            </div>
          )
        }
      </div>
    </header>
  );
}

export default Toolbar;
