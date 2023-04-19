import React from 'react';
import Hotal1 from '../../../public/img/hotel1.jpg';
import Hotal2 from '../../../public/img/hotel2.jpg';
import Hotal3 from '../../../public/img/hotel3.jpg';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <div className='grid grid-cols-3 gap-9 px-28 mt-8 mb-11 snap-x '>
            <div className='bg-gray-100 w-full h-100 p-2 rounded px-3 relative'>
               
                <img className='w-full h-44' src={Hotal1} alt="" />
                <h1 className='text-3xl font-sans font-semibold text-black mb-2 mt-3'>Single Bad </h1>
                <p>This is five star hottel in the Lacxreing adjust in bath room and kitchen room</p>
                <h1 className='text-2xl font-sans font-semibold mt-2 mb-3'>Booking Info:</h1>
                <p>Room Reservation at least 10 hour ago and Hotel  Maneger Confirm the Mail . Then Mail important code is Room Key </p>
                
                <p className='mt-2 mb-4'>Price: <span>$430</span></p>

                <div className='mt-10'>
                <Link><button className='bg-red-400  px-3 py-2 w-full rounded absolute bottom-0 left-0'>Book</button></Link>
                </div>
            </div>
            <div className='bg-gray-100 w-full h-100 p-2 rounded px-3 relative'>
               
                <img className='w-full h-44' src={Hotal2} alt="" />
                <h1 className='text-3xl font-sans font-semibold text-black mb-2 mt-3'>Couple Bad Rooms</h1>
                <p>This is five star hottel in the Lacxreing adjust in bath room and kitchen room</p>
                <h1 className='text-2xl font-sans font-semibold mt-2 mb-3'>Booking Info:</h1>
                <p>Room Reservation at least 10 hour ago and Hotel  Maneger Confirm the Mail . Then Mail important code is Room Key </p>
                
                <p className='mt-2 mb-4'>Price: <span>$430</span></p>

                <div className='mt-10'>
                <Link><button className='bg-red-400  px-3 py-2 w-full rounded absolute bottom-0 left-0'>Book</button></Link>
                </div>
            </div>
            <div className='bg-gray-100 w-full h-100 p-2 rounded px-3 relative'>
               
                <img className='w-full h-44' src={Hotal3} alt="" />
                <h1 className='text-3xl font-sans font-semibold text-black mb-2 mt-3'>Family Bad Rooms</h1>
                <p>This is five star hottel in the Lacxreing adjust in bath room and kitchen room</p>
                <h1 className='text-2xl font-sans font-semibold mt-2 mb-3'>Booking Info:</h1>
                <p>Room Reservation at least 10 hour ago and Hotel  Maneger Confirm the Mail . Then Mail important code is Room Key </p>
                
                <p className='mt-2 mb-4'>Price: <span>$430</span></p>
                <div className='mt-10'>
                <Link><button className='bg-red-400  px-3 py-2 w-full rounded absolute bottom-0 left-0'>Book</button></Link>
                </div>

                
            </div>
        </div>
    );
};

export default Menu;