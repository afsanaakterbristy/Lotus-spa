import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
  useTitle("ErrorPage")
    return (
        <div>
           
             <section className='flex items-center h-screen p-16 bg-gray-100 text-purple-800'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
       
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-black'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            Sorry, we couldn't find this page.
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-purple-900 hover:bg-gray-700 text-gray-100'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ErrorPage;