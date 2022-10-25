import { lazy, Fragment } from 'react';

const About = lazy(() => import('./About/AboutPage'));
const SignIn = lazy(() => import('./Authentication/SignIn/SignInPage'));
const SignUp = lazy(() => import('./Authentication/SignUp/SignUpPage'));
const GetPassword = lazy(() =>
  import('./Authentication/GetPasswordPage/GetPasswordPage')
);
const Checkout = lazy(() => import('./Checkout'));
const Home = lazy(() => import('./Home/HomePage'));
const ProductDetail = lazy(() => import('./ProductDetail/ProductDetail'));
const ShoppingBasket = lazy(() => import('./ShoppingBasket/ShoppingBasket'));
const ShoppingList = lazy(() => import('./ShoppingList/ShoppingList'));
const UserProfile = lazy(() => import('./UserProfile/UserProfile'));

const RouterLayout = [
  {
    name: 'home',
    path: '/',
    public: true,
    subPath: false,
    children: [],
    element: Home,
  },
  {
    name: 'about',
    path: 'about',
    public: true,
    subPath: false,
    children: [],
    element: About,
  },
  {
    name: 'signIn',
    path: '/sign-in',
    public: true,
    subPath: false,
    children: [],
    element: SignIn,
  },
  {
    name: 'signUp',
    path: 'sign-up',
    public: true,
    subPath: false,
    children: [],
    element: SignUp,
  },
  {
    name: 'recoverPassword',
    path: 'recover-password',
    public: true,
    subPath: false,
    children: [],
    element: GetPassword,
  },
  {
    name: 'products',
    path: 'products',
    subPath: true,
    public: true,
    children: [
      {
        name: 'products',
        path: '',
        public: true,
        subPath: false,
        children: [],
        element: ShoppingList,
      },
      {
        name: 'productDetail',
        path: ':id',
        public: true,
        subPath: false,
        children: [],
        element: ProductDetail,
      },
    ],
    element: '',
  },
  {
    name: 'shoppingBasket',
    path: 'shopping-basket',
    public: true,
    subPath: false,
    children: [],
    element: ShoppingBasket,
  },
  {
    name: 'checkout',
    path: 'checkout',
    public: false,
    subPath: false,
    children: [],
    element: Checkout,
  },
  {
    name: 'user',
    path: 'user',
    public: false,
    subPath: false,
    children: [],
    element: UserProfile,
  },
];

export default RouterLayout;
