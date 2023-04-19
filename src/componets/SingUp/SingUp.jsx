import React, { useState } from 'react';
import { BsFillEyeSlashFill,BsFillEyeFill } from "react-icons/bs";
const SingUp = () => {
    const [passHide,setPassHide] = useState(false);
    const [cpassHide, setCpassHide] = useState(false);

    const handleCpass = () =>{
        setCpassHide(!cpassHide)
    }
    const handlePass =() =>{
        setPassHide(!passHide)
    }
    return (
        <div  className='mt-16 px-28 mb-12 '>
            <h2 className='text-4xl text-center mb-11 font-serif font-semibold'>SingUp Here!</h2>
            <form  className='bg-neutral-300 p-10 rounded'>
            <div>
                    <label className='text-3xl'  htmlFor="name">Name:</label>
                    <input className=' rounded border-yellow-950 text-3xl px-3 py-2 mt-2 w-full h-auto' type="name" name='name' placeholder='Enter your Email' />
                </div>
                <div>
                    <label className='text-3xl'  htmlFor="email">Email:</label>
                    <input className=' rounded border-yellow-950 text-3xl px-3 py-2 mt-2 w-full h-auto' type="email" name='email' placeholder='Enter your Email' />
                </div>
                <div className='mt-4 relative'>
                    <label className='text-3xl' htmlFor="password">Password:</label>
                    <input  className='border rounded text-3xl px-3 py-2 mt-3 w-full h-auto' type={passHide ?'text':'password'} name='password' placeholder='Enter your password' />
                    <div onClick={handlePass} className='absolute top-14 right-0 cursor-pointer'>
                        {
                            passHide ?<BsFillEyeFill  className='w-16 h-8  '/> : <BsFillEyeSlashFill  className='w-16 h-8 '/>
                        }
                    </div>
                </div>
                <div className='mt-4 relative'>
                    <label className='text-3xl' htmlFor="Cpassword">Confirm Password:</label>
                    <input  className='border rounded text-3xl px-3 py-2 mt-3 w-full h-auto' type={cpassHide ?'text':'password'} name='Cpassword' placeholder='Enter your password' />
                    <div onClick={handleCpass} className='absolute top-14 right-0 cursor-pointer'>
                        {
                            cpassHide ? <BsFillEyeFill  className='w-16 h-8  '/> : <BsFillEyeSlashFill  className='w-16 h-8 '/> 
                        }
                   
                      
                   
                    </div>
                </div>

                

                <input className='w-full bg-blue-600 text-2xl py-4 rounded hover:bg-blue-800 text-white mt-10' type="submit" value="SingUp" />

            </form>
        </div>
    );
};

export default SingUp;