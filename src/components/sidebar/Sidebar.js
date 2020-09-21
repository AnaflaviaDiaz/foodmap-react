import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const categoriesFood = [
  { id: 1, name: 'Chifa', route: '/chifa' },
  { id: 2, name: 'Criolla', route: '/criolla' },
  { id: 3, name: 'Parrilla', route: '/parrilla' },
  { id: 4, name: 'Sushi', route: '/sushi' },
  { id: 5, name: 'Mariscos', route: '/mariscos' },
  { id: 6, name: 'Selvática', route: '/selvatica' },
];

const Sidebar = () => {
  return (
    <div className="" style={{backgroundColor: 'gray'}}>
      <h3>Categorías</h3>
      <div className="">
        <Router>
          {categoriesFood.map(category => <Link key={category.id} to={category.route}>{category.name}</Link>)}
        </Router>
      </div>
    </div>
  );
}

export default Sidebar;
