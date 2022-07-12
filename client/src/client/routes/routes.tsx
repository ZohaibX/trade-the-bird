import Home from '../pages/home';
import UsersList from '../pages/usersList';
import App from '../App';
import NotFound from '../pages/not-found';
import Admins from '../pages/admins';
import Test from './../pages/test';
import SignUp from '../pages/auth/sign-up';
import SignIn from '../pages/auth/sign-in';
import ChangePassword from '../pages/auth/change-password';
import ForgotPassword from '../pages/auth/forgot-password';
import imageUpload from '../pages/image-upload';
import PostAd from '../pages/ads/post-ad';
import AdDetails from '../pages/ads/ad-details';
import AdDetailsX from '../pages/ads/ad-details-x';

export default [
  {
    ...App,
    routes: [
      { path: '/', ...Home, exact: true },
      { path: '/users', ...UsersList },
      { path: '/admins', ...Admins },
      { path: '/test', ...Test },
      { path: '/register', ...SignUp },
      { path: '/sign-in', ...SignIn },
      { path: '/:adId', ...AdDetails },

      // Replace -- add current user id in params
      { path: '/post-ad', ...PostAd },

      { path: '/change-password', ...ChangePassword },
      { path: '/forgot-password', ...ForgotPassword },
      { path: '/image-upload', ...imageUpload },
      { ...NotFound }, // this is how we use not-found page -- by not providing path
    ],
  },
];
