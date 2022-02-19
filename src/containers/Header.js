import React from "react";
import Home from "../actions/Homes.png"
import About from "../actions/about.png"
import user from "../actions/user.png"
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <React.Fragment>
      <div   className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}border border-primary border-3`} style={{backgroundColor:"#0C1E7F"}}>
      <div className="ui fixed menu " style={{backgroundColor:"#0C1E7F" ,border:"solid 2px #E60965"}}>

        <div className="ui container center" >
            <h1 style={{fontFamily:"-moz-initial",color:"whitesmoke"}}>FakeStore</h1>
        </div>
<Link to="/">
        <img src={Home} style={{height:40}} className=" m-3"/>
        </Link>
        <Link to="/About">
        <img src={About}  style={{height:40}} className=" m-3"/>
        </Link>
        <Link to="/UserLogin">
        <img src={user}  style={{height:40}} className=" m-3"/>
        </Link>
    
      </div>
      </div>
    </React.Fragment>
  );
};
