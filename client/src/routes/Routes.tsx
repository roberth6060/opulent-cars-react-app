
import {useRoutes} from 'react-router-dom';
import { lazy } from "react";
const Home = lazy (()=> import ("../components/Home/Home"));
const Navigation = lazy (()=> import ("../components/Navigation/Navigation"));


const routes = [
  {
    path: "/",
    element: <Navigation/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};

export default Routes;