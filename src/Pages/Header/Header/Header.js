import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const {user, logOut}= useAuth();
    console.log(user)
    return (
        <div className="bg-white fixed  w-full top-0 shadow-lg ">
            <div className="container mx-auto px-12">
                <div className="w-full flex mx-auto justify-between p-2">
                    <div className="brand-logo font-bold text-4xl flex">
                        <h2 className="text-indigo-900"><span className="text-blue-400">Medi</span>care</h2>
                    </div>
                
                    <ul className="nav-list flex flex-row mx-4 text-base">
                        <li className="nav-list-item text-blue-400 p-4 mx-4 uppercase"><NavLink to="/home">Home</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-4 uppercase"><NavLink to="/doctors">Doctors</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-4 uppercase"><NavLink to="/about">About</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-4 uppercase"><NavLink to="/about">Blog</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-4 uppercase"><NavLink to="/services">Services</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-4 uppercase"><NavLink to="/contact">Contact</NavLink></li>
                        {user?.email? <button className="bg-blue-400 rounded text-sm p-4" onClick={logOut}>logout</button>:<li className="nav-list-item text-red-400 font-bold p-4 mx-4 "><NavLink to="/login">Login</NavLink></li>}
                        <li className="nav-list-item text-indigo-900 "><NavLink to="/login">{user?.displayName}</NavLink></li>  
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;