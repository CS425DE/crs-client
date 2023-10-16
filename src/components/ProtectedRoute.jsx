import {Navigate} from "react-router";

export const ProtectedRoute = ({ isAuth, isUser,  children }) => {
    if (!isAuth && !isUser) {
        return <Navigate to="/login" replace />;
    }

    return children;
};