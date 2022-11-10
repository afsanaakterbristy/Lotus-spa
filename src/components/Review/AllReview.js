import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewShow from './ReviewShow';

const AllReview = () => {
    const { user ,logOut} = useContext(AuthContext)
    const [reviews,setReviews]=useState([])
    useTitle("MyReview")
   
    useEffect(() => {
        fetch(`https://service-server-side.vercel.app/review?email=${user?.email}`,{
            headers: {
                authorization:`Bearer ${localStorage.getItem('token')}`
            } 
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                 return logOut()
               } 
              return res.json()
            })
        .then(data=>setReviews(data))
    },[user?.email,reviews,logOut])
    
   const handleDelete = id => {
        const proceed = window.confirm('Want to deleted')
        if (proceed) {
            fetch(`https://service-server-side.vercel.app/review/${id}`, {
                method:'DELETE'
            })
             .then(res => res.json())
                .then(data => {
                  console.log(data)
                  if (data.deleteCount > 0) {
                   toast.success('Thanks for giving review')
                    const remaining = reviews.filter(revi => revi._id !== id);
                    setReviews(remaining)
                  }
                })
             toast.success('Your review deleted')
        }
  }
  
    return (
        <div>
         
            {reviews.length === 0 ?<>
            <h2 className="text-3xl font-bold text-center p-3">There is no review</h2>  
            </>
          :
          <>         
                 <h2 className="text-3xl font-bold text-center p-3">My Reviews</h2>
    {
        reviews.map(rev => <ReviewShow kew={rev._id} rev={rev} handleDelete={handleDelete}> 
        </ReviewShow>)                     
     }
          </>
         }
        </div>
    );
};

export default AllReview;