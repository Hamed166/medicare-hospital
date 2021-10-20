import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {index, name, picture, description}= service;
    return (
        <div className=" bg-blue-50 ">
            <img className="w-full h-48 mb-2" src={picture} alt=""/>
            <div className="bg-gray-100 ">
                <h2 className="text-thin text-2xl mb-2">{name}</h2>
                <p className="text-gray-600 mb-2">{description}</p>
            </div>
            <Link to={`/serviceinfo/${index}`}>
                <button className="mb-4 text-white text-base bg-blue-400 hover:bg-green-400  hover:-translate-y-1 hover:scale-110 bg-yellow-400 py-2 px-4 rounded-md">View More</button>
            </Link>
        </div>
    );
};

export default Service;