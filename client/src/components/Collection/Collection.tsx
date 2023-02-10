/* ========= Collection Data and Functionality =========*/
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_COLLECTION } from "../../services/collectionService/queries";
import { ICollection } from "../../types/CollectionType";
import Footer from "../common/Footer/Footer";
import Spinner from "../common/Spinner/Spinner";
import { CollectionContainer } from "./style/CollectionStyle";



 let wheelType = "";


const Collection = ()=> {
const [collection, setCollection] = useState([]);
 const {loading, error }= useQuery(GET_COLLECTION, {
  onCompleted(data) {
      setCollection(data.getCars);
  },
 });

   if(loading) return <Spinner/>
   if(error) return <p>Something went wrong</p>


  return (
  <>
  <CollectionContainer>

  {
  collection.map((collection:ICollection) => {
      if (collection.carType === "rwd") {
    wheelType = " rwhp";
  } else if (collection.carType === "fwd") {
    wheelType = " fwhp";
  } else {
    wheelType = " hp";
  }
    return (<a className="car-link" target="_blank" href={collection.imageUrl} rel="noreferrer">
      <div className="car-card">
        <h2>{collection.name}</h2>
        <img src={collection.imageUrl} alt={collection.name} />
        <ul>
          <li>{collection.carLbs} lb-ft</li>
          <li>{collection.carRwhp + wheelType} </li>
          <li>$ {collection.carPrice}</li>
        </ul>
      </div>
    </a>)
  })}
  </CollectionContainer>
  <Footer/>
  </>
  )
}
export default Collection;