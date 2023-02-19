import { Suspense, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import Routes from "./routes/Routes";
import Spinner from "./components/common/Spinner/Spinner";
import CollectionService from "./services/collectionService"
import {  Dispatch } from "@reduxjs/toolkit";
import { Get_Collection_getCars } from "./services/collectionService/__generated__/Get_Collection";
import { useDispatch } from "react-redux";
import {setCollection} from "./store/features/homePageSlice";

  //Dispatch action and store collection state 
  const actionDispatch = (dispatch: Dispatch)=> ({
    setCollection: (colletion: Get_Collection_getCars[])=> dispatch(setCollection(colletion))
  });

const App: React.FC = () => {
  //useDispatch is hook that return dispatch function 
  const {setCollection} = actionDispatch(useDispatch());

  //query from graphql client and save state in redux store(to be access throughout app)
    const fetchCollection  = async ()=> {
      const collection = await CollectionService.getCollection().catch((error)=> {
        console.log(error)
      });
      if(collection)setCollection(collection);
      console.log("Colection", collection);
    }
    
    useEffect(()=> {
      fetchCollection();
    }, [])

  return (
    <Suspense fallback={<Spinner/>}>
      <GlobalStyle />
         <Routes/>
    </Suspense>
  );
};

export default App;
