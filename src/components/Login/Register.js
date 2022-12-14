
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { setAuthToken } from '../../Token/Token';

const Register = () => {
  useTitle("Register")
  const { createUser, providerLogin,updateUserProfile } = useContext(AuthContext);
  const [spinner,setSpinner]=useState(false)
  const [error, setError] = useState('')
  const location = useLocation()
  const navigate = useNavigate();
  const from=location.state?.from?.pathname||'/'
  
     //google
    const googleProvider=new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
      
        providerLogin(googleProvider)
            .then(result => {
              const user = result.user;
              console.log(user)
              setAuthToken(user)
              navigate(from, { replace: true })
              toast.success('Your Register success')
        }).catch(error=>console.error(error))
    }  
    
    //from
    const handleSubmit= ( event) => {
      event.preventDefault();
       setSpinner(true)
        const form = event.target;
        const name1 = form.name1.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name1,photoURL);
        createUser(email, password)
            .then(result => {
              const user = result.user;
              console.log(user);
              handleUpdateProfile(name1, photoURL);
              setAuthToken(user)
              navigate(from, { replace: true })
              toast.success('Your Register success')
              setSpinner(false)
              setError('');
              form.reset();
            })
         .catch(error => {
            console.error(error)
           setError(error.message);
           setSpinner(false)
          })

        
  }

  //for profile
 const handleUpdateProfile = (name1, photoURL) => {
        const profile = {
            displayName: name1,
            photoURL:photoURL
    }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
  }



   if (spinner) {
        return <div className='flex justify-center items-center min-h-[60vh]'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-800 dark:border-purple-500"></div></div>
    }

    return (
        <div>
          <>
             <div className='flex justify-center items-center pt-8'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold text-purple-900 dark:text-black'>Register</h1>
          <p className='text-sm text-gray-400'>Create a new account</p>
                        </div>
                         
        <form onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-12 ng-untouched ng-pristine ng-valid'
        > 
          <div className='space-y-4'>
            <div>
             <label htmlFor='email' className='block mb-2 text-sm'>
               Full Name
              </label>
              <input
                type='text'
                name='name1'
                id='name'
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                data-temp-mail-org='0' required
              />
                </div>
                <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
               PhotoURL
              </label>
              <input
                type='text'
                name='photoURL'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                data-temp-mail-org='0' required
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password' className='text-sm'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
              />
            </div>
          </div>
          <div className='space-y-2'>
            <div>
              <button 
                type='submit'
                className='w-full px-8 py-3 font-semibold rounded-md bg-purple-900  hover:bg-gray-700 hover:text-white text-gray-100'
              >
                Sign Up
                  </button>
            <h2 className='text-xs mt-1 hover:underline text-red-400 font-bold'>
            {error}
          </h2>
            </div>
          </div>
        </form> 
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 '></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 '></div>
        </div>
                        <div className='flex justify-center space-x-4'>
                            
          <button onClick={handleGoogleSignIn} aria-label='Log in with Google' className='p-3 rounded-sm'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
              className='w-5 h-5 fill-current'
            >
              <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
            </svg>
          </button>
          
        
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account yet?{' '}
          <Link to='/login' className='hover:underline text-gray-600'>
            Sign In
              </Link>
            
          .
        </p>
      </div>
    </div>
        </>
        </div>
    );
};

export default Register;