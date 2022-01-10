import React, { memo } from "react";
import { renderRoutes } from 'react-router-config'

const SearchMainPage = (props: any) => {
  const { route } = props;

  // console.log('SearchMainPage - props');
  // console.log(props);
  // console.log('\n');

  return (
    <>
      <p>Search Main Page loading.</p>
      {renderRoutes(route.routes, { ...props })}
    </>
  );
}

export default SearchMainPage;