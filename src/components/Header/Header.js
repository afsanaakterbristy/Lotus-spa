import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import icon from '../../assets/icon.png'

const Header = () => {
  const {user, logOut}=useContext(AuthContext)
    
  const handleLogout = () => {
    logOut()
      .then()
      .catch();
  }
  
    const menuItems = <>
        <li className='font-bold'><Link to='/'>Home</Link>
      </li>
       <li className='font-bold'><Link to='/blog'>Blog</Link>
        </li>
      
      { 
        
          user?.email?
          <>
           <li className='font-bold'><Link to='/services'>All Services</Link>
        </li>
        <li className='font-bold'><Link to='/allreview'>My Review</Link>
            </li>
        <li className='font-bold'><Link to='/addservices'>Add Services</Link>
            </li>
            <li className='font-bold'>
              <button onClick={handleLogout}>SingOut</button>
            </li>
          
          </>
          :
          <>
         <li className='font-bold'><Link to='/login'>Login</Link>
        </li>
         <li className='font-bold'><Link to='/register'>Register</Link>
        </li>
        
         </>
    
        
      }
      
    </>
    
    return (
         <div className="navbar h-20 bg-purple-300">
  <div className="navbar">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
          </div>
              <img className='w-9 ml-8' src={icon} alt="" />
                <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
                  Lotus Spa  
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     {menuItems}
    </ul>
  </div>
  {/* <div className="navbar-end">
    <button className="btn">Profile</button>
  </div> */}
</div>
    );
};

export default Header;