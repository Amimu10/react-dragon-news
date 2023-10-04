import React, { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {logIn} = useContext(AuthContext); 
  const location = useLocation();
  console.log("location in the login page", location);
  const Navigate = useNavigate();

const handleLogin = (e) =>{
   e.preventDefault();
   const form = new FormData(e.currentTarget);
   const email = form.get("email");
   const password = form.get("password");
   console.log(email, password);

// signIn user
   logIn(email, password)
   .then(result => {
       console.log(result.user);

      //  navigate after login
      Navigate(location?.state? location.state : "/"); 
   })
   .catch(err => console.log(err))



}
   

  return (
 <div>
   <Navbar></Navbar>
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Login now!</h1>
    </div>
     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="flex items-center gap-2 mt-4">
        <p>Don't have an account?</p>
        <Link to="/register" className="text-red-600 hover:underline">Register</Link>
      </div>
      </form>
    </div>
  </div>
  
</div>
 </div>

  );
};

export default Login;
