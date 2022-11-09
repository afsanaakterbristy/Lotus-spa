import React, {  useEffect, useState } from 'react';


const Review = ({_id}) => {


  const [reviews, setReviews] = useState([]);
     useEffect(() => {
        fetch(`https://service-server-side.vercel.app/reviewtwo?review=${_id}`)
          .then(res => res.json())
          .then(data => {
            setReviews(data)
          })
    },[_id,reviews])

  //console.log(_id)
  return (
      
        <div>
            {
          reviews.map(revi => <>
              
                     <div className="p-10">
  
           <div className=" w-full lg:max-w-full lg:flex">
    
      <div className="border-b  border-gray-400  lg:border-gray-400 bg-white rounded-b lg:rounded-b lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
        
          <div className="text-gray-900 font-bold text-xl mb-2">{revi.reviewName}</div>
                          <p className="text-gray-700 text-base"> {revi.textarea}</p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={revi.photo} alt="Avatar of Writer"/>
          <div className="text-sm">
            <p className="text-gray-900 leading-none font-semibold">{revi.customer}</p>
            <p className="text-gray-600">{revi.time}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
                
                
                </>)
           }
       
        </div>
    );
};

export default Review;