import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ServicesCard from '../ServicesCard/ServicesCard';

const AllServices = () => {
    const [Services, setServices] = useState([]);
    const { loading } = useContext(AuthContext);
    useTitle("Services")
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
        .then(data=>setServices(data))
    }, [])
    
      if (loading) {
        return <div className='flex justify-center items-center min-h-[60vh]'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-purple-500"></div></div>
    }

    return (
        <div>
             <div className='text-center'>
            <p className="text-2xl font-bold text-black my-3">We make sure we serve</p>
            <h2 className='text-5xl font-semibold mb-4'>The Best Of Our Service</h2>
            <p className='mb-4'>You deserve better than a rushed massage by a rookie therapist in a place that makes you feel more stressed.</p>
           
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