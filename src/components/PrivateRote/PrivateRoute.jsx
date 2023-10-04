import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => { 
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname); 
if(loading){
    return <div className="flex justify-center h-[80vh]">
        <span className="loading loading-spinner text-accent"></span>
    </div>
}
    if(user) {
     return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate> ;

};

export default PrivateRoute;