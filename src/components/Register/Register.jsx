import React, { useContext } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
 const {createUser} = useContext(AuthContext);

        const handleSignin = (e) =>{
           e.preventDefault();
           const form = new FormData(e.currentTarget);
           const name = form.get("name");
           const photo = form.get("photo");
           const email = form.get("email");
           const password = form.get("password");
           console.log(name, photo, email, password);
        
//   create user
   createUser(email, password)
 .then(result => {
    console.log(result)
 })

        }
    return (
    <div>
   <Navbar></Navbar>
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Register now!</h1>
    </div>
     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignin} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
        <div className="flex items-center gap-2 mt-4">
        <p>Already have an account?</p>
        <Link to="/login" className="text-red-600 hover:underline">Login</Link>
      </div>
      </form>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default Register;