import React from 'react';
import { Link } from "react-router-dom";
import 404Page

const NotFound = () => {
  return (
    <div id='notfound'>
      <span>404</span>
      <h1>Sahifa topilmadi</h1>
      <Link to="/">Bosh sahifa</Link>
    </div>
  )
}

export default NotFound