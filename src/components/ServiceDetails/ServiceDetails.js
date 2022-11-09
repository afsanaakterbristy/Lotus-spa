import React, { useContext } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Review from '../Review/Review';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { toast } from 'react-toastify';

const ServiceDetails = () => {
    const {_id, img, price, title, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const location=useLocation()
    useTitle("ServicesDetails")
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = user?.email ||'unregister';
        const textarea = form.textarea.value;
        //console.log(name, email, photo, textarea);
        
        const review = {
            time:new Date().toLocaleString(),
            review: _id,
            reviewName: title,
            price,
            customer: name,
            email,
            photo,
            textarea
        }
        fetch('https://service-server-side.vercel.app/review', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Thanks for review ')               
                    form.reset();
                }
            })
            .catch(er=>console.error(er))

    }
    return (
        
        <div className='grid gap-2 grid-cols-1  lg:grid-cols-2'>
            <div className='m-5'>
                <div className="card card-compact w-full bg-base-100 shadow-xl mb-5">
        <PhotoProvider>
         <PhotoView src={img}>
          <figure><img className='w-full' src={img} alt="Shoes" /></figure> 
        </PhotoView>
       </PhotoProvider>
        <div className="card-body">
                <h2 className="card-title">{ title }</h2>
                    <p>Price:${price}</p>
                    <p>{description}</p>                    
            </div>         
    </div>
        </div>
            <div>
                <h2 className='text-2xl font-bold text-center'>Reviews</h2>
                {
                    user?.email?
                     <div>
                    
                <h2 className='text-2xl font-bold my-4'>Write Your Comment</h2>
                <form  onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-4'>
                
                <input type="text" name='name' placeholder="Type here" className="input input-bordered input-primary w-full " required/>
                <input type="text"  name='photo' placeholder="Type here" className="input input-bordered input-primary w-full" required/>
                <input type="text" name='email' placeholder="Type here" defaultValue={user?.email} className="input input-bordered input-primary w-full " readOnly/>
               
                <textarea name='textarea' className="textarea textarea-bordered " placeholder="Massage" required></textarea>
                </div>
                    <input type="submit" className='btn bg-purple-800 text-white mt-3' value='comment' />
                </form>
                        </div>
                        : <><p className='ml-10 text-2xl'>Please Login For Give A <Link state={{from:location}} replace className='text-purple-800 font-semibold' to='/login'>Review</Link></p></>
                }
                {
                    <Review _id={_id}></Review>
                }
            </div>
            
             
        </div>
    );
};

export default ServiceDetails;