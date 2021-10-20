import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('/servicesData.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container mx-auto px-24  mt-24 mb-12">
            <h2 className="text-center text-4xl text-gray-600 p-10 font-thin uppercase">Major <span className="text-blue-400">Services</span></h2>
           <div className="grid grid-cols-3 gap-8">
           {
                services.map(service=><Service 
                    key ={service.index}
                    service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;