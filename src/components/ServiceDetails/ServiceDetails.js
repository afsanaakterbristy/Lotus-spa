import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const ServiceDetails = () => {
    const {_id, img, price, title, description } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = user?.email ||'unregister';
        const textarea = form.textarea.value;
        console.log(name, email, photo, textarea);
        
        const review = {
            review: _id,
            reviewName: title,
            price,
            customer: name,
            email,
            photo,
            textarea
        }

    }
    return (
        
        <div className='grid gap-2 grid-cols-1  lg:grid-cols-2'>
            <div className='m-5'>
                <div className="card card-compact w-full bg-base-100 shadow-xl mb-5">
        <figure><img className='w-full' src={img} alt="Shoes" /></figure>
        <div className="card-body">
                <h2 className="card-title">{ title }</h2>
                    <p>Price:${price}</p>
                    <p>{description}</p>
                    
            </div>
          
    </div>
        </div>
            <div>
                <h2 className='text-2xl font-bold text-center'>Reviews</h2>


                <h2 className='text-2xl m-4'>Write Your Comment</h2>
                <form  onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-4'>
                
                <input type="text" name='name' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" name='photo' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" name='email' placeholder="Type here" defaultValue={user?.email} className="input input-bordered input-primary w-full max-w-xs" readOnly/>
               
                <textarea name='textarea' className="textarea textarea-bordered max-w-xs" placeholder="Bio"></textarea>
                </div>
                    <input type="submit" className='btn' value='comment' />
                </form>
            </div>
            
             
        </div>
    );
};

export default ServiceDetails;