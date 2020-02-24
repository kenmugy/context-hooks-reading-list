import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  const disp = books.length ? books.length : 'No';
  return (
    <div className='navbar'>
      <h2>Ninja Reading list</h2>
      <h5>
        Currently have <span>{disp}</span> books{' '}
      </h5>
    </div>
  );
};

export default Navbar;
