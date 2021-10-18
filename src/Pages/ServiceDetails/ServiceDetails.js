import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [serviceinfo, setServiceinfo]= useState([]);

    useEffect(()=>{
        
        fetch('/servicesData.json')
        .then(res =>res.json())
        .then(data=> setServiceinfo(data))

    },[])
   
    const detail = serviceinfo.find((x)=>x.index == serviceId)
    
    return (
        <div className="m-36">
            <img src={detail?.picture} alt=""/>
            <h2  className=" text-4xl font-bold">{detail?.name}</h2>
            <p>{detail?.description}</p>
            
        </div>
    );
};

export default ServiceDetails;