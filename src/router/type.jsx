import { Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import PrivateRoute from './PrivateRoute';

export const handelRecursion = (router) => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  if (router.children.length > 0) {
    return router.children.map((child, index) => {
      if (!child.public) {
        return (
          <Route key={index} path='/' element={<PrivateRoute />}>
            <Route key={index} path={child.path} element={<child.element />}>
              {handelRecursion(child)}
            </Route>
          </Route>
        );
      } else {
        if (!child.subPath) {
          return (
            <Route key={index} path={child.path} element={<child.element />}>
              {handelRecursion(child)}
            </Route>
          );
        } else {
          return (
            <Route key={index} path={child.path}>
              {handelRecursion(child)}
            </Route>
          );
        }
      }
    });
  }
};
