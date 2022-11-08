import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewShow from './ReviewShow';

const AllReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews,setReviews]=useState([])


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
           
            
         <div className="overflow-x-auto ">
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Massage</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody> 
      
    {
        reviews.map(rev => <ReviewShow kew={rev._id} rev={rev} handleDelete={handleDelete}> 
        </ReviewShow>)                    
     }
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default AllReview;