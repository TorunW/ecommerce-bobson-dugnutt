import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import axios from 'axios';
import '../../styles/admin.css';

function Admin() {
  const [allPages, setAllPages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/pages').then((response) => {
      setAllPages(response.data);
    });
  }, []);

  return (
    <main id='admin'>
      <div className='menu-container'>
        {allPages.map((value, key) => {
          return (
            <div className='menu-item-wrapper'>
              <div className='menu-item'>{value.title}</div>
              <a href={`/admin/page/${value.id}/pageform`}>
                edit {value.title}
              </a>
              <a>delete page</a>
            </div>
          );
        })}
        <a className='create-btn' href='/admin/pageform'>
          Create a new page
        </a>
      </div>
    </main>
  );
}

export default Admin;
