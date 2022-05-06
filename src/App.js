import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// frontend pages
import Header from './app/components/pages/Header';
import Home from './app/components/pages/Home';
import Shop from './app/components/pages/Merch';

// admin pages
import Admin from './app/components/admin/Admin';
import PageForm from './app/components/admin/PageForm';
import PostForm from './app/components/admin/PostForm';

// styles
import './app/styles/default.css';
import AdminHeader from './app/components/admin/AdminHeader';

function App() {
  const path = window.location.pathname.split('/')[1];

  let headerDisplay;
  if (path === 'admin') {
    headerDisplay = <AdminHeader />;
  } else {
    headerDisplay = <Header />;
  }
  return (
    <div className='App'>
      <BrowserRouter>
        {headerDisplay}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin/editpages' element={<Admin />} />
          <Route path='/admin/pageform' element={<PageForm />} />
          <Route path='/admin/page/:id/pageform' element={<PageForm />} />
          <Route path='/admin/page/:id/postform' element={<PostForm />} />
          {/* <Route
            path='/admin/page/:id/postform/:postId'
            element={<PostForm />}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
