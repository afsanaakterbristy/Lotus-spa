import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewShow from './ReviewShow';

const AllReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews,setReviews]=useState([])
    useTitle("MyReview")

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
        .then(data=>setReviews(data))
    },[user?.email])
    
   const handleDelete = id => {
        const proceed = window.confirm('want to deleted')
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method:'DELETE'
            })
             .then(res => res.json())
                .then(data => {
                  console.log(data)
                  if (data.deleteCount > 0) {
                    alert('done deleted')
                    const remaining = reviews.filter(revi => revi._id !== id);
                    setReviews(remaining)
                  }
                })
        }
  }
  
 


    return (
        <div>
           
            
        
    {
        reviews.map(rev => <ReviewShow kew={rev._id} rev={rev} handleDelete={handleDelete}> 
        </ReviewShow>)                    
     }
     


        </div>
    );
};

export default AllReview;