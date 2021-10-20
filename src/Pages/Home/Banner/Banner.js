import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="bg-gray-50">
            <h2 className="bg-gray-50 text-center text-4xl text-blue-400 p-10 font-thin my-16 uppercase">About Us</h2>
            <div className="container mx-auto px-12 mx-2">
            
                <div className="flex my-12">
                
                    <div className="flex-1 px-4 text-justify mr-16">
                        <span className=" font-bold text-xl text-gray-600">Welcome to Medicenter</span>
                        <h3 className="text-4xl text-justify text-thin my-4"><span className="text-red-300 font-bold"> Medicare</span> holds the privilage of being Chittagong's first choice hospital to care your family</h3>
                       
                        <p className="my-4 text-gray-600 text-justify">Since its founding we become an integral part of the city, advancing our mission of providing access to compassionate care to our communities. Today patients find care that combines world-class medicine with compassion.</p>

                        <div className="mb-4">
                        <button className="text-white text-base bg-blue-400 hover:bg-green-400  hover:-translate-y-1 hover:scale-110 bg-yellow-400 py-4 px-4 rounded-md">Fix an Appoinment</button>
                        <Link to="/services"><button className="text-white text-base my-2 mx-8 bg-yellow-400 hover:bg-green-400  hover:-translate-y-1 hover:scale-110 bg-blue-400 py-4 px-4 rounded-md">View Services</button></Link>
                        </div>
                    </div>
                    <div className="flex-1 mx-4">
                        <img className="w-full h-100" src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg" alt=""/>
                    </div>
                </div>
            </div>

        </div>
      
    );
};

export default Banner;