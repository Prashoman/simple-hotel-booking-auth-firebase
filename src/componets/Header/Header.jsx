import React from 'react';
import ImgHotel from "../../../public/img/img2.jpg"
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='w-full h-screen bg-no-repeat bg-cover' style={{backgroundImage: `url(${ImgHotel})`}}>
            <nav className='flex justify-between items-center px-28 py-3'>
                <div>
                    <h1 className='text-2xl font-sans font-semibold text-yellow-500 text-opacity-75'>HoTel <span className='text-4xl text-amber-400'>5 </span>St<span className='text-blue-400'>ar</span> </h1>
                </div>
                <ul className='text-yellow-500 font-sans font-bold space-x-4'>
                <NavLink
                    to='/'
                    className={({ isActive}) =>
                      isActive
                        ? "text-orange-500" 
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to='/booking'
                    className={({ isActive}) =>
                      isActive
                        ? "text-orange-500" 
                        : ""
                    }
                  >
                    Booking
                  </NavLink>
                  <NavLink
                    to='/contact'
                    className={({ isActive}) =>
                      isActive
                        ? "text-orange-500" 
                        : ""
                    }
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    to='/login'
                    className={({ isActive}) =>
                      isActive
                        ? "text-orange-500" 
                        : ""
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to='/register'
                    className={({ isActive}) =>
                      isActive
                        ? "text-orange-500" 
                        : ""
                    }
                  >
                    SinUp
                  </NavLink>
                  
                </ul>
                <div className='flex justify-between items-center'>
                    <p>Profile</p>
                    <p>singUp</p>
                </div>
            </nav>
        </div>
    );
};

export default Header;