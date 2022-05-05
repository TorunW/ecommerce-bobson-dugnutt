import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/header.css';

function Header(props) {
  const [allPages, setAllPages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/pages').then((response) => {
      setAllPages(response.data);
    });
  }, []);

  return (
    <div className='navigation'>
      <div className='logo-wrapper'>
        <div className='logo'>
          <img src='/logo.jpg' alt='logo for the band' />
        </div>
      </div>

      <div className='menu-items'>
        {allPages.map((value, key) => {
          return <a href={value.link}>{value.title}</a>;
        })}
      </div>
    </div>
  );
}

export default Header;
