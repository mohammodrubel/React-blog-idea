import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Context/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,loading} = useAuth()
    if(loading){
        <Spinner animation="grow" variant="warning" />
    }
    return (
        <Route
        {...rest}
        render={({location}) => user.email ? children : <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
               }}
        ></Redirect>
    
    } 
        >
            
        </Route>
    );
};

export default PrivateRoute;