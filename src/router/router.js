import { NotFound } from '../components/pages';
import Layout from '../components/pages/Layout';
import RouterLayout from '../components/pages/module';

const RouterView = [
  {
    name: 'layout',
    path: '/',
    public: true,
    subPath: false,
    children: [...RouterLayout],
    element: Layout,
  },
  {
    name: 'notfound',
    path: '*',
    public: true,
    subPath: false,
    children: [],
    element: NotFound,
  },
];

export default RouterView;
