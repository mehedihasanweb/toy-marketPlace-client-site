import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {users, loader} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);
    
    if(loader){
        return <progress className="progress w-56"></progress>
    }

    if(users){
        return children
    }
    return <Navigate  state={{from: location}} to='/login' replace/>
};

export default PrivateRoute;