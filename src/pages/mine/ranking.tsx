import React, { memo } from "react";
import { NavLink, Redirect } from 'react-router-dom';

const Button = () => {
  return (
    <NavLink
      to="/mine/index"
    >
      to index page
    </NavLink>
  );
}

const MinePage = (props: any) => {
  const onRedirect = () => {
    props.history.push("/mine/index");
  }
  return (
    <>
      <p>Ranking Page is Show</p>
      <button onClick={onRedirect}>onRedirect</button>
    </>
  );
}

export default MinePage;