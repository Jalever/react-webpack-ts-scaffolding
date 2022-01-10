import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "@/store/index";
import routes from '@/router/index'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import Spin from "@components/Spin/index";
const { Suspense } = React;

if (module && module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Suspense fallback={<Spin />}>{renderRoutes(routes)}</Suspense>
    </HashRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);