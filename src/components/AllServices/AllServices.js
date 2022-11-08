import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

const AllServices = () => {
   const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
             <div className='text-center'>
            <p className="text-2xl font-bold text-black">We make sure we serve</p>
            <h2 className='text-5xl font-semibold'>The Best Of Our Service</h2>
            <p>You deserve better than a rushed massage by a rookie therapist in a place that makes you feel more stressed.</p>
           
        </div>
         <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-16'>
                {
                    Services.map(service => <ServicesCard key={service._id} service={service}>
                        
                    </ServicesCard>)
                }
            </div>
          
          
       </div>
    );
};

export default AllServices;