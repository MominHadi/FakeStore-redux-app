import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Form = (props) => {
  // usestate

  const { register, handleSubmit,formState:{errors} } = useForm({mode:"onBlur",defaultValues:{username:"",email:"",password:""}});
  console.log(errors);

  return (
    <React.Fragment>
      <div
        style={{
          height: 500,
          width: 500,
          marginTop: 140,
          marginLeft: 500,
          border: "white solid 3px",
          borderRadius: 17,
          
        }}
      >
        <form
          onSubmit={handleSubmit((data)=>{console.log(data);})}
          
          style={{ marginLeft: 100, marginTop: 40 ,color:"white"}}
        >
          <h1 style={{ marginLeft: 50 }}>Login Form</h1>

          <div className="mb-3">
            <label htmlFor="exampleUserName" className="form-label mt-3">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              style={{ width: 300 }}
              {...register("username",{required:"This is required"})}
            />
            <p style={{color:"red",marginLeft:100}}> {errors.username?.message}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label mt-2">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ width: 300 }}
              {...register("email",{required:"This is required"})}
            />
             <p style={{color:"red",marginLeft:100}}>{errors.email?.message}</p>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div classn="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label mt-2">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              style={{ width: 300 }}
              {...register("password",{required:"This is required",minLength:{value:4,message:"minimum Length  of Password is 4"},maxLength:{value:8,message:"Password Length should not exceed more than 8 characters"}})}
            />
             <p style={{color:"red"}}>{errors.password?.message}</p>
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-4"
            style={{ width: 200, marginLeft: 50 ,backgroundColor:"#F94892"}}
          >
            Submit
          </button>
        </form>
      </div>


    </React.Fragment>
  );
};
