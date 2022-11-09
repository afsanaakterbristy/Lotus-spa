import React from 'react'; 
import { useNavigate } from 'react-router-dom';

const ReviewShow = ({ rev, handleDelete }) => {

  const { _id, customer, email, photo, textarea, reviewName, time } = rev;
  
    const navigate=useNavigate()
    const handleEdit = id => {
        navigate(`/editreview/${id}`)
    }
    return ( 
             <div>
   
        <div className=" w-full lg:max-w-full lg:flex">    
      <div className=" border-b border-gray-400   lg:border-gray-400 bg-white rounded-b lg:rounded-b p-4 flex flex-col justify-between leading-normal">
            <div className='flex justify-between'>              
            <div className="mb-8">        
            <h2 className="text-gray-900 font-bold text-xl mb-2">{reviewName}</h2>
           <p className="text-gray-700 text-base"> {textarea}</p>
            </div>
            <div className='flex'>
               <button onClick={()=>handleDelete(_id)} className="btn btn-warning btn-xs mr-2">Delete</button>
              <button onClick={()=>handleEdit(_id)} className="btn btn-primary  btn-xs">Edite</button>
            </div>
      </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={photo} alt="Avatar of Writer"/>
          <div className="text-sm">
            <p className="text-gray-900 leading-none font-semibold">{customer}</p>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
              <p className="text-gray-600 text-right">{time}</p> 
      </div>
    </div>
            </div>
           
    );
};

export default ReviewShow;