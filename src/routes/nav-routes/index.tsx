import DelayedLoading from '@/utils/DelayedLoading';
import { RouteObject } from 'react-router-dom';
import { AuthGuardReverse, Home, Profile, TourDetails, Tours } from '../lazy.imports';
import { NavRoute } from './nav-routes-enum';
import Agencies from '@/pages/agencies';

export type NavRouteType = RouteObject & {
  path: string;
  element: JSX.Element;
};

const { HOME, FURNITURE, PROFILE, FURNITURE_DETAILS, AGENSIES } = NavRoute;

export const NAV_ROUTES: NavRouteType[] = [
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: FURNITURE,
    element: <Tours />,
  },
  {
    path: AGENSIES,
    element: <Agencies />,
  },
  {
    path: PROFILE,
    element: (
      <AuthGuardReverse>
        <Profile />
      </AuthGuardReverse>
    ),
  },
  {
    path: FURNITURE_DETAILS,
    element: (
      <DelayedLoading delay={300}>
        <TourDetails />
      </DelayedLoading>
    ),
  },
];
