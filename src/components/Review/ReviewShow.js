import React, { useEffect, useState } from 'react';

const ReviewShow = ({ rev,handleDelete }) => {
    const {_id, customer, email, photo, textarea, reviewName, review } = rev;
    // const [reviewService,setReviewService]=useState({})
    
    // useEffect(() => {
    //     fetch(`http://localhost:5000/services/${review}`)
    //         .then(res => res.json())
    //     .then(data=>setReviewService(data))
        
    // }, [review])
    
   
    return (
        <div>
             <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
                            <div className="font-bold">{ customer}</div>
              
            </div>
          </div>
        </td>
        <td>
          {email}
          
         
        </td>
        <td>{textarea}</td>
        <th>
        </th>
          <button className="btn btn-danger btn-xs">Edit</button>
          <button onClick={()=>handleDelete(_id)} className="btn btn-primary btn-xs">Delete</button>
      </tr>
     
        </div>
    );
};

export default ReviewShow;