import React, { memo } from "react";
import { NavLink, Redirect } from 'react-router-dom';

const Button = () => {
  return (
    <NavLink
      to="/mine/ranking"
    >
      to ranking page
    </NavLink>
  );
}

const MinePage = () => {
  return (
    <>
      <p>Mine Page loading.</p>
      <Button />
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
      </svg>
    </>
  );
}

export default MinePage;