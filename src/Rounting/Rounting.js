import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import PrivateRounting from './PrivateRounting';
import Home from '../pages/Home/Home';
import NavBar from '../navBar/NavBar';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import SearchProduct from '../pages/searchProduct/SearchProduct';
import Login from '../auth/login/Login';
import LogOut from '../auth/logOut/LogOut.js';
import SignUp from '../auth/signUp/SignUp';
import AddProduct from '../pages/addProduct/AddProduct';
import List from '../components/list/List';
function Rounting() {

    return (
        <BrowserRouter>
            <NavBar />


            <Routes>
                <Route element={
                    <PrivateRounting />}>

                    <Route
                        path="/"
                        element={
                            <Home />

                        }
                    />


           


                

                    <Route
                        path="/List"
                        element={
                            <List />

                        }
                    />
                    <Route
                        path="/Search"
                        element={
                            <SearchProduct />

                        }
                    />
                    <Route
                        path="/AddProduct"
                        element={
                            <AddProduct />

                        }
                    />

                    <Route
                        path="/LogOut"
                        element={
                            <LogOut />

                        }
                    />


                </Route>


                <Route path="/login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />





            </Routes>


        </BrowserRouter>
    )
}
export default Rounting