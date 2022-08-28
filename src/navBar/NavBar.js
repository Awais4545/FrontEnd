

import React from 'react';
import { NavLink } from "react-router-dom";

import { useNavigate } from 'react-router-dom'

import { BiSearch } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";


function NavBar() {
    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : "normal",

        }
    }
    const navigate = useNavigate()

    const auth = localStorage.getItem("user");




    const LogOut = () => {
        alert("LOGOUT SUCCESSFUL")
        localStorage.clear();
        navigate("/login")

    }

    const searchdata = () => {
        navigate("/search")
    }



    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-sm bg-light" style={{ backgroundColor: "#1AC073" }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#" style={{ color: 'black', fontWeight: "bold", fontSize: 30 }}>Real State
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        {



                            (auth) ?



                                <>

                                    <ul className="navbar-nav m-auto">

                                       







                                       

                                    </ul>

                                    <div className="d-flex " role="search">
                                        <li className="nav-item" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                            <button type="button" class="btn btn-primary text-bold " style={{ marginRight: 20 }}>  <NavLink className="nav-link active hove   fw-bold   styleText" aria-current="page" to="/">

                                                <AiOutlineUser style={{ fontSize: 20, color: "white", }} />Home</NavLink>
                                            </button>


                                            <button type="button" class="btn btn-primary text-bold " style={{ marginRight: 20 }}>  <NavLink className="nav-link active hove   fw-bold   styleText" aria-current="page" to="/AddProduct">

                                                <IoIosAddCircle style={{ fontSize: 20, color: "white", }} />
                                                Property</NavLink>
                                            </button>

                                            <button type="button" class="btn btn-primary text-bold " style={{ marginRight: 20 }}>  <NavLink className="nav-link active hove   fw-bold   styleText" aria-current="page" to="/List">

                                                <AiOutlineUser style={{ fontSize: 20, color: "white", }} />
                                                My Property</NavLink>
                                            </button>




                                            <button type="button" class="btn btn-dark text-bold"  style={{marginRight:20}}>  <NavLink className="nav-link active hove   fw-bold   styleText" aria-current="page" to="/Search">

                                                <BiSearch style={{ fontSize: 20, color: "white", }} />
                                                Search</NavLink>
                                            </button>
                                             <button type="button" class="btn btn-dark text-bold"  onClick={() => LogOut()}>  <NavLink className="nav-link active hove   fw-bold   styleText" aria-current="page" to="/LogOut">

                                                <BiLogOutCircle style={{ fontSize: 20, color: "white", }} />
                                                LogOut</NavLink>
                                            </button>




                                        </li>



                                    </div>

                                </>

                                :
                                <>

                                    <ul className="navbar-nav ms-auto">

                                        <li className="nav-item" style={{ display: "flex", flexDirection: "row", marginRight: "10px" }}>


                                            <button type="button" class="btn btn-dark text-bold  " style={{ marginRight: "10px" }} >
                                                <NavLink className="nav-link active hove   fw-bold  " aria-current="page" to="/login" style={{ color: "white" }} >Login</NavLink>


                                            </button>

                                            <button type="button"   class="btn  btn-dark text-bold  styleBtn" style={{ display: "flex", flexDirection: "row", border: "1px solid black" }}>
                                                <NavLink className="nav-link active hove   fw-bold   styleBtn" aria-current="page" to="/signUp" style={{ color: "white" }}>SignUp</NavLink>
                                            </button>

                                        </li>
                                    </ul>
                                </>










                        }






                    </div>
                </div>
            </nav >










        </div >













    );
}

export default NavBar;


