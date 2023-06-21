import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {users, loader} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);
    
    if(loader){
        return <h2>Loading...</h2>
    }

    if(users){
        return (children)
    }
    return <Navigate to='/login' state={{from: location}}  replace/>
};

export default PrivateRoute;