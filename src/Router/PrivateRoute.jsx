import React, { useContext } from 'react';
import { AuthContex } from '../Firebase/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location =useLocation()
    const {user,loading}=useContext(AuthContex);
    if (loading){
        return <progress className=" progress w-80 bg-yellow-500 mx-auto flex   "></progress>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'state={{ from: location }} replace ></Navigate>

};

export default PrivateRoute;