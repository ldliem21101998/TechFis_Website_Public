/** @format */

import { HomePage, CarrerPage } from "../pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: <HomePage />,
    main: () => <HomePage />,
  },
  {
    path: "/career",
    exact: true,
    component: <CarrerPage />,
    main: () => <CarrerPage />,
  },
];

export default routes;
