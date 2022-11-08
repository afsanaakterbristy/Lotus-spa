import React from 'react';
import { useNavigate } from 'react-router-dom';


const ReviewShow = ({ rev, handleDelete }) => {
   
    const {_id, customer, email, photo, textarea, reviewName, review } = rev;
    // const [reviewService,setReviewService]=useState({})
    
    // useEffect(() => {
    //     fetch(`http://localhost:5000/services/${review}`)
    //         .then(res => res.json())
    //     .then(data=>setReviewService(data))
        
    // }, [review])
    const navigate=useNavigate()
    const handleEdit = id => {
        navigate(`/editreview/${id}`)
    }
    
   
   
    return (
        <div>
              <div>
           
  
    <div className=" w-full lg:max-w-full lg:flex">
    
      <div className="border-r border-b border-l border-t border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
        
          <div className="text-gray-900 font-bold text-xl mb-2">{reviewName}</div>
                          <p className="text-gray-700 text-base"> {textarea}</p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={photo} alt="Avatar of Writer"/>
          <div className="text-sm">
            <p className="text-gray-900 leading-none font-semibold">{customer}</p>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
                
          <button onClick={()=>handleDelete(_id)} className="btn btn-primary btn-xs">Delete</button>
          <button onClick={()=>handleEdit(_id)} className="btn btn-ghost btn-xs">Edite</button>
     
     
 
        </div>
    );
};

export default ReviewShow;