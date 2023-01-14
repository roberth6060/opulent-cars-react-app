
import {useRoutes} from 'react-router-dom';
import { lazy } from "react";
import Shop from '../app/container/Shop/Shop';
import About from '../app/container/About/About';
import Articles from '../app/container/Articles/Articles';
import Contact from '../app/container/Contact/Conatct';
import Collection from '../app/container/Collection/Collection';
const Home = lazy (()=> import ("../app/container/HomePage/Home"));
const Navigation = lazy (()=> import ("../app/container/Navigation/Navigation"));


const routes = [
  {
    path: "/",
    element: <Navigation/>,
    children: [
      {
        index: true,
        element: <Home />,
      }, 
      {
        path: "about",
        element: <About />,
      }, 
      {
        path: "collection",
        element: <Collection />,
      },
       {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
       {
        path: "contact",
        element: <Contact />,
      }    
    ],
  },
];

const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};

export default Routes;