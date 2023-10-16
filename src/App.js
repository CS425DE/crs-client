import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import AdminNavbar from './components/UI/Navbar/AdminNavbar';
import CustomerNavbar from './components/UI/Navbar/CustomerNavbar';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isCustomer, setIsCustomer] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        if (localStorage.getItem('admin')) {
            setIsAdmin(true)
        }
        if (localStorage.getItem('customer')) {
            setIsCustomer(true)
        }
        setLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isAdmin,
            setIsAdmin,
            isCustomer,
            setIsCustomer,
            isLoading
        }}>
            <BrowserRouter>
                {isAuth  ? ( isAdmin ? <AdminNavbar/> : <CustomerNavbar />) : null}
                <AppRouter />
            </BrowserRouter>
         </AuthContext.Provider>
    )
}

export default App;
