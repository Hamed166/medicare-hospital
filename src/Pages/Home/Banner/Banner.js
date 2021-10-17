import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <h2 className="bg-indigo-900 text-center text-5xl text-white p-24 font-bold my-16">Who We Are</h2>
            <div className="container mx-auto mx-2">
            
                <div className="flex my-12">
                
                    <div className="flex-1 mt-8">
                        <span className="uppercase border-1-2 border-fuchsia-600 font-bold text-sm text-gray-600">Top Categories</span>
                        <h3 className="text-3xl text-thin my-4">Find us To<span className="text-red-300 font-bold"> Care</span> Your Family</h3>
                        <p className="my-8 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores excepturi explicabo esse nisi molestias molestiae magni porro magnam, iusto sunt aliquid necessitatibus optio quod iste facilis similique eos voluptatum sint? </p>

                        <button className="transition duration-500 ease-in-out bg-yellow-400 hover:bg-green-400 transform hover:-translate-y-1 hover:scale-110 bg-yellow-400 py-4 px-4 rounded-md">Learn More</button>
                    </div>
                    <div className="flex-1 mx-12">
                        <img className="w-full h-62" src="../../about.png" alt=""/>
                    </div>
                </div>
            </div>

        </div>
      
    );
};

export default Banner;