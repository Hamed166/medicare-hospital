import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className="bg-gray-800">
            <div className="container mx-auto px-12">
                <div className= "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8  text-white justify-between py-8">
                    <div  className=" mx-4">
                        <h2 className="text-lg font-bold">About Us</h2>
                        <p className="my-4 text-gray-400  text-sm">Veniam Sequi molestias aut necessitatibus optio magni at natus accusamus.Lorem ipsum dolor sit amet, consectetur adipisicin gelit, sed do eiusmod tempor incididunt .</p>
                        <div className="text-gray-400 flex text-xl">
                            
                            <SocialIcon network="facebook"  bgColor="#ffffff" className="mx-2"/>
                            <SocialIcon network="linkedin"  bgColor="#ffffff" className="mx-2"/>
                            <SocialIcon network="google"    bgColor="#ffffff" className="mx-2" />
                            <SocialIcon network="pinterest" bgColor="#ffffff" className="" />
                                
                            </div>
                    </div>
                    <div  className="">
                        <h2 className="text-lg font-bold">Company</h2>
                        <ul className="my-4 text-gray-400  text-sm leading-7">
                            <li>About Us</li>
                            <li>Contact Us </li>
                            <li>Project</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                    <div  className=" ">
                        <h2 className="text-lg font-bold">Courses</h2>
                        <ul className="my-4 text-gray-400  text-sm leading-7">
                            <li>Basic HTML CSS</li>
                            <li>Javascript and Bootstrap</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div  className="">
                        <h2 className="text-lg font-bold">Contact</h2>
                        <ul className="my-4 text-gray-400 text-sm leading-7">
                            <li>Phone Numbe</li>
                            <li>Email Address</li>
                            <li>Office Address</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div  className="text-gray-50"><hr/></div>
            
            <div className="container mx-auto px-12">
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-between ">
                    <div className="brand-logo font-bold text-3xl flex p-2">
                        <h2 className="text-yellow-400"><span className="text-blue-500 text-4xl">Medi</span>care</h2>
                    </div>
                    <div> <p className="p-4 text-gray-400">@ Copyright reserved to PHero.Team Crafted by <span className="text-yellow-400">react-hero</span></p></div>
                </div>
            </div>
       </div>
    );
};

export default Footer;