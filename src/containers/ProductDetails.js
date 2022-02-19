import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../actions/Productaction";
export const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);
  const products = useSelector((state) => state.product);
  console.log(products);
  const { image, title, price, category, description } = products;

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId != "") {
      fetchProductDetails();
      return()=>{dispatch(removeSelectedProducts())}
    }
  }, [productId]);
  return (
    <React.Fragment>
      <div className="ui grid container">
        {Object.keys(products).length === 0 ? (
          <div>loading....</div>
        ) : (
          <div className="ui placeholder segment" style={{marginTop:100}}>
            <div className="ui  two column stackable center aligned grid">
              <div className="  ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    {" "}
                    <a className="ui teal tag label ">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content"> Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
