import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesCard = ({ service }) => {
    const {_id, img, price, title,description } = service;
    return (
     
            <div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
                
                 
     <PhotoProvider>
      <PhotoView src={img}>
       <figure><img className='w-96 h-34' src={img} alt="Shoes" /></figure> 
      </PhotoView>
    </PhotoProvider>
        
        <div className="card-body">
                <h2 className="card-title">{ title }</h2>
                    <p>Price:${price}</p>
                     <>{description.length > 100 ?
              <p>{description.slice(0, 100) + '...'}</p> : <>{description}</>}</>
                    <Link to={`/servicedetails/${_id}`}>
                       <div className="card-actions justify-end mb-4">
            <button className="btn bg-purple-800">See More</button>
            </div>
        </Link>
         </div> 
       </div>
                         

             </div>               
          
    );
};

export default ServicesCard;