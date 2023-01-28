
import {useRoutes} from 'react-router-dom';
import { lazy } from "react";
import Shop from '../container/Shop/Shop';
import About from '../container/About/About';
import Articles from '../container/Articles/Articles';
import Contact from '../container/Contact/Conatct';
import Collection from '../container/Collection/Collection';
const Home = lazy (()=> import ("../container/HomePage/HomePage"));
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