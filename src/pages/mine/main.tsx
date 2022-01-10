import React, { memo } from "react";
import { renderRoutes } from 'react-router-config'

const MineMainPage = (props: any) => {
  const { route } = props;
  return (
    <>
      <p>Mine Main Page</p>
      {renderRoutes(route.routes)}
    </>
  );
}

export default MineMainPage;