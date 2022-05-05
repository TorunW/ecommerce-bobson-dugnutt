import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';

function AdminHeader(props) {
  const [allPages, setAllPages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/pages').then((response) => {
      setAllPages(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Edit pages</h2>
      {allPages.map((value, key) => {
        return (
          <ul>
            <li>{value.title}</li>
            <button>delete page</button>
            <a>edit content on {value.title}</a>
          </ul>
        );
      })}
      <Link to='/admin/pageform'>Create a page +</Link>
      <Link to='/admin/postform'>Create a post +</Link>
    </div>
  );
}

export default AdminHeader;
