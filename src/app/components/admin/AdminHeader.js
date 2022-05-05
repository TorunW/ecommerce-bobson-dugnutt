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
            <Link to={`/admin/page/${value.id}/postform`}>
              edit content on {value.title}
            </Link>
            <button>delete page</button>
          </ul>
        );
      })}
      <Link to='/admin/pageform'>Create a page +</Link>
    </div>
  );
}

export default AdminHeader;
