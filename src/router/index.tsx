import * as React from "react";
import { Redirect } from 'react-router-dom'
const AppComp = React.lazy(() => import('@/App'));
const HomepageComp = React.lazy(() => import('@/pages/homepage/index'));

const routes = [
  {
    path: '/',
    // exact: true,
    component: AppComp,
    routes: [
      { path: '/index', component: HomepageComp }
    ],
  },
];
export default routes