import React, { useEffect, useState } from 'react';
import '../../styles/adminHeader.css';

function AdminHeader(props) {
  return (
    <div className='header'>
      <a href='/admin/editpages'>Edit pages</a>
      <a>Edit shop</a>
      <a>Logout</a>
    </div>
  );
}

export default AdminHeader;
