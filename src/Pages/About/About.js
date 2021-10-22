import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faPhone, faUserNurse } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="bg-gray-50 mb-20">
        <h2 className="bg-gray-50 text-center text-4xl text-blue-400 p-10 font-thin my-16 uppercase">About Us</h2>
        <div className="container mx-auto px-12 mx-2">
        
            <div className="grid lg:grid-cols-2 grid-cols-1">
            
                <div className=" px-4 text-justify mr-16">
                    <span className=" font-bold text-xl text-gray-600">Learn why is it worth it</span>
                    <h3 className="text-4xl text-justify text-thin my-4 mt-2"><span className="text-red-300 font-bold"> Medicare</span> Immediate Care Facilities Provide Quick Care and Relief</h3>
                   
                    <p className="my-4 text-gray-600 text-justify mt-2">No appointment needed, most patients are seen, treated and released in about 60 minutes. Certified and experienced MD physicians not nurses and on site diagnostic tests with lab</p>

                    <div className="mb-4">
                    <Link to="/contact"><button className="text-white text-base bg-blue-400 hover:bg-green-400  hover:-translate-y-1 hover:scale-110 bg-yellow-400 py-4 px-4 rounded-md">Fix an Appoinment</button></Link>
                    <Link to="/services"><button className="text-white text-base my-2 mx-8 bg-yellow-400 hover:bg-green-400  hover:-translate-y-1 hover:scale-110 bg-blue-400 py-4 px-4 rounded-md">View Services</button></Link>
                    </div>
                </div>
                <div className=" mx-4 ">
                    <img className="w-full h-100" src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg" alt=""/>
                </div>
            </div>

            <div className="container mx-auto px-20 mx-2 mt-40">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 overflow-hidden ">
                    <div className="flex bg-gray-200 p-4 rounded-md overflow-hidden">
                        <div className="mx-2">
                            <h4 className="bg-blue-400 rounded-full text-2xl h-20 w-20 p-5 "><FontAwesomeIcon icon={faUserNurse} /></h4>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-indigo-900">Qualified Doctors</h3>
                            <p>0187778899</p>
                        </div>
                    </div>
                    <div className="flex bg-gray-200 p-4 rounded-md">
                        <div className="mx-2">
                            <h4 className="bg-blue-400 text-2xl rounded-full h-20 w-20 p-5 "><FontAwesomeIcon icon={faPhone} /></h4>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-indigo-900">24 hours Service</h3>
                            <p>react-hero@.com</p>
                        </div>
                    </div>
                    <div className="flex bg-gray-200 p-4 rounded-md">
                        <div className="mx-2">
                            <h4 className="bg-blue-400 text-2xl rounded-full h-20 w-20 p-5 "><FontAwesomeIcon icon={faLightbulb} /></h4>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-indigo-900">Need Emergency</h3>
                            <p>2 St, Chittagong</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
    );
};

export default About;