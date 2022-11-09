import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const ReviewEdit = () => {
    const router = useParams();
    useTitle("ReviewEdit")
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
        <div className='flex justify-center items-center pt-8 mb-48 mx-96'>       
             <div className='flex flex-col w-full p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                
                <h2 className='text-2xl font-semibold my-6'>Edit Your Comment</h2>
                <form  onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-4'>
                
                <input type="text" name='name' placeholder="Type here" defaultValue={reviews?.customer}  className="input input-bordered input-primary w-full " readOnly/>
                <input type="text" name='photo' placeholder="Type here" defaultValue={reviews?.photo}  className="input input-bordered input-primary w-full" />
                <input type="text" name='email' placeholder="Type here" defaultValue={user?.email} className="input input-bordered input-primary w-full" readOnly/>
               
                <textarea name='textarea' className="textarea textarea-bordered" placeholder="Message" defaultValue={reviews?.textarea} ></textarea>
                </div>
                    <div className='flex justify-center m-6'>
                         <input type="submit" className='btn bg-purple-800 text-white' value='comment' />
                   </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewEdit;