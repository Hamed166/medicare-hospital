import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading}= useAuth();
    if(isLoading){
        return <button type="button" className="bg-red-500" disabled>
                    <svg className=" animate-spin p-4 mr-3" viewBox="0 0 12 12">
                    </svg>
                    Processing
                </button>
    }
    return (
        <Route
        {...rest}

        render={({location})=>user.email ? children: <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
            }}
        >
        </Redirect> 
    }
        >
        </Route>
    );
};

export default PrivateRoute;