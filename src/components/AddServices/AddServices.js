import React, { useContext} from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {

      const { user } = useContext(AuthContext)
      useTitle("AddServices");

        const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;        
        const photo = form.photo.value;        
        const textarea = form.textarea.value;
        console.log(name,  price, textarea);
        
        const addServices = {
           
            title: name,
            img:photo,
            price,
            description:textarea
        }
        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(addServices)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('spa done')
                }
            })
            .catch(er=>console.error(er))


    
    }
    return (
        <div>
        <div className='flex justify-center items-center pt-8 mb-48 mx-96'>
      <div className='flex flex-col w-full p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold text-black'>Add Services</h1>
         
        </div>
      
        <form onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='name'
                name='name'
                id='email'
                placeholder=''
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Price
                </label>
              </div>
              <input
                type='text'
                name='price'
                id='password'
                placeholder=''
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Photo
                </label>
              </div>
              <input
                type='text'
                name='photo'
                id='password'
                placeholder=''
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
              />
            </div>
            <div>
              <div className='flex justify-between '>
                <label htmlFor='password' className='text-sm mb-2'>
                  Description
                </label>
              </div>
              <textarea
                type='text'
                name='textarea'
                id='password'
                placeholder=''
                className='w-full h-36 px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='w-full px-8 py-3 font-semibold rounded-md bg-purple-900 dark:bg-black hover:bg-gray-700 hover:text-white text-gray-100'
            >
              Add Services
            </button>
          </div>
        </form>
        
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
           
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div className='flex justify-center space-x-4'>
        
        </div>
        
      </div>
    </div>
        </div>
    );
};

export default AddServices;