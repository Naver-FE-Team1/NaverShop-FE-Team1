import {Suspense} from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import RouterView from './router/router';
import {handelRecursion} from './router/type';
import Loader from './components/pages/Loader/Loader';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          {RouterView.map((router, index) => {
            return (
              <Route
                key={index}
                path={router.path}
                element={<router.element />}
              >
                {handelRecursion(router)}
              </Route>
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
