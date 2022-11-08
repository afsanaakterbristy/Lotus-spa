import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const ReviewEdit = () => {
    const router = useParams();

    const { user } = useContext(AuthContext)
    const [reviews,setReviews]=useState({})
    const { id } = router;
    const navigate=useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/review/${id}`)
        .then(res => res.json())
        .then(data=>setReviews(data))
    },[id])

    const handleSubmit = e => {
          e.preventDefault();
         
        const newReview = {
         name :e.target.name.value,
         photo: e.target.photo.value,
         email: e.target.email.value,
         textarea:e.target.textarea.value
       }
        console.log(newReview)
        
        fetch(`http://localhost:5000/review/${id}`, {
            method: 'PATCH',
              headers: {
                'content-type':'application/json'
            },
              body:JSON.stringify(newReview)
        })
         .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.success){
                    alert('newreview done')
                    navigate('/allreview')
                }
            })
            .catch(er=>console.error(er))
    }
   
    return (
        <div>       
             <div>
                <h2 className='text-2xl font-bold text-center'>Reviews</h2>


                <h2 className='text-2xl m-4'>Write Your Comment</h2>
                <form  onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-4'>
                
                <input type="text" name='name' placeholder="Type here" defaultValue={reviews?.customer}  className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" name='photo' placeholder="Type here" defaultValue={reviews?.photo}  className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" name='email' placeholder="Type here" defaultValue={user?.email} className="input input-bordered input-primary w-full max-w-xs" readOnly/>
               
                <textarea name='textarea' className="textarea textarea-bordered max-w-xs" placeholder="Message" defaultValue={reviews?.textarea} ></textarea>
                </div>
                    <input type="submit" className='btn' value='comment' />
                </form>
            </div>
        </div>
    );
};

export default ReviewEdit;