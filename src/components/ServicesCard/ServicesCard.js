import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { img, price, title,description } = service;
    return (
       <>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
        <figure><img className='w-96' src={img} alt="Shoes" /></figure>
        <div className="card-body">
                <h2 className="card-title">{ title }</h2>
                    <p>Price:${price}</p>
                     <>{description.length > 100 ?
              <p>{description.slice(0, 100) + '...'}</p> : <>{description}</>}</>
                    <Link to={`/`}>
                       <div className="card-actions justify-end mb-4">
            <button className="btn btn-primary">See More</button>
            </div>
                    </Link>
            </div>
          
    </div>
         
            </>
    );
};

export default ServicesCard;