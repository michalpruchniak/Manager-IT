
import { useEffect } from "react";
import {Route,  Redirect } from "react-router";
import { getUser } from "./auth/operations";

const AuthProvider = ({ children, ...rest }) => {
    const user = window.localStorage.getItem('login'); 
    useEffect(() => getUser());
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    return children;
                }
                return (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }, 
                        }}
                    />
                );
            }}
        />
    );
};
export default AuthProvider;