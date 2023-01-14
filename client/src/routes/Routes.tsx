
import {useRoutes} from 'react-router-dom';
import { lazy } from "react";
import Shop from '../components/Shop/Shop';
import About from '../components/About/About';
import Articles from '../components/Articles/Articles';
import Contact from '../components/Contact/Conatct';
import Collection from '../components/Collection/Collection';
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