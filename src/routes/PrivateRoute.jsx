import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    if(loader){
        return <h2>Loading...</h2>
    }
    if(user){
        return children
    }
    return <Navigate to='/' replace/>
};

export default PrivateRoute;