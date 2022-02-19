import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProductComponent = (props) => {
  const products = useSelector((state) => state.allProducts.products);
  
  const renderList = products.map((product) => {
    const {id,title,cateogory,image, price}=product
    return (
     
      <div style={{marginLeft:600,marginTop:100 }} key={id} >
       
        <br/>
        <br/>

        <Link to={`/product/${id}`}>
        <div className="ui link cards" style={{width:430,border:"white 1px solid",marginTop:20}}>
          <div className="card" style={{width:400,border:"white 1px solid"}}>
            <div className="image" style={{width:400}}>
              <img src={image} alt={title}/>
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta ">{cateogory}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  return <React.Fragment>{renderList}</React.Fragment>;
};
