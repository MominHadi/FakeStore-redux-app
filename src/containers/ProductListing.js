import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductComponent } from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../actions/Productaction";

export const ProductListing = (props) => {
  const products = useSelector((state) => state);
  const dispatch=useDispatch();

  const fetchproducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error", err);
      });
      dispatch(setProducts(response.data))
  };
  console.log("Products: ",products);

  useEffect (()=>{fetchproducts()},[])

  return (
    <div>
      {" "}
      <h1>Helo</h1>

      <ProductComponent />
    </div>
  );
};
