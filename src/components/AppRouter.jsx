import React, {useContext} from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateAdminRoutes, privateCustomerRoutes } from "../router";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";
import Login from "../pages/customer/Login";
import {ProtectedRoute} from "./ProtectedRoute";
import SignUp from '../pages/customer/SignUp';

const AppRouter = () => {
    const {isAuth, isAdmin, isCustomer, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }
    return (
        (isAdmin && isAuth) ? 
        <Routes>
            <Route path={'/login'} element={<Login />} />
            {privateAdminRoutes.map(route =>
                <Route key={route.path} path={route.path} element={<ProtectedRoute isAuth={isAuth} isUser={isAdmin}>{route.component}</ProtectedRoute>} />
            )}
        </Routes>
        : 
        <Routes>
            <Route path={'/login'} element={<Login />} />
            <Route path={'/signup'} element={<SignUp />} />
            {privateCustomerRoutes.map(route =>
                <Route key={route.path} path={route.path} element={<ProtectedRoute isAuth={isAuth} isUser={isCustomer}>{route.component}</ProtectedRoute>} />
            )}
     </Routes>
    );
};

export default AppRouter;
