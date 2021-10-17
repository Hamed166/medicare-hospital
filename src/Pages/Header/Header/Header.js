import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-white fixed  w-full top-0 shadow-lg ">
            <div className="container mx-auto px">
                <div className=" w-full flex justify-between p-2 text-gray-200 ">
                    <div className="brand-logo font-bold text-4xl  flex">
                        <h2 className="text-indigo-900"><span className="text-blue-400">Medi</span>care</h2>
                    </div>
                
                    <ul className="nav-list flex flex-row mx-4 text-sm uppercase">
                        <li className="nav-list-item text-blue-400 p-4 mx-4"><NavLink to="/home">Home</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-4"><NavLink to="/about">About</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-4"><NavLink to="/services">Courses</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-4"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;