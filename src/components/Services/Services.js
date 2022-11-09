import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className='container mx-auto ml-24'>
             <div className='text-center'>
            <p className="text-2xl font-bold text-black mb-3">We make sure we serve</p>
            <h2 className='text-5xl font-semibold mb-4'>The Best Of Our Service</h2>
            <p className='mb-6'>You deserve better than a rushed massage by a rookie therapist in a place that makes you feel more stressed.</p>
           
        </div>
         <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    Services.map(service => <ServicesCard key={service._id} service={service}>   
                    </ServicesCard>)
                }
              
            </div>
           
            <div className='flex justify-center'>
                <Link to={`/services`}>
                       <div className="card-actions justify-end m-8">
            <button className="btn bg-purple-800 px-8">All See</button>
            </div>
                    </Link>
            </div>
       </div>
    );
};

export default Services;