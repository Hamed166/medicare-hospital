import React from 'react';

const Service = ({service}) => {
    const {name, picture, description}= service;
    return (
        <div className="mt-4">
            <img src={picture} alt=""/>
            <div className="">
                <h2 className="text-bold text-xl">{name}</h2>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default Service;