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
        <div id="services" className="container mx-auto px-12">
            <h2 className="text-3xl mt-4 uppercase">Major <span className="text-red-400">Services</span></h2>
           <div className="grid grid-cols-3 gap-10 mt-4">
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