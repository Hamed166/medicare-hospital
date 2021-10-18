import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {index, name, picture, description}= service;
    return (
        <div className="mt-4">
            <img src={picture} alt=""/>
            <div className="">
                <h2 className="text-bold text-xl">{name}</h2>
                <p className="text-gray-400">{description}</p>
            </div>
            <Link to={`/serviceinfo/${index}`}>
                <button>View More</button>
            </Link>
        </div>
    );
};

export default Service;