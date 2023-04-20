import React, { useContext, useState } from 'react';
import { BsFillEyeSlashFill,BsFillEyeFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../ContexProvider/ContexProvider';

const LogIn = () => {
    const [hideShow,setHideShow] = useState(false);
    const {loginWithGoogle} = useContext(AuthProvider)

    //password hide show method
    const handleShow = () =>{
        setHideShow(!hideShow)
    }
    //login with google
    const handleWithGoogle = () =>{
        loginWithGoogle()
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error =>{
            console.log(error);
        })
    }

const handleLogin = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
}

    return (
        <div  className='mt-16 px-28 mb-12 '>
            <h2 className='text-4xl text-center mb-11 font-serif font-semibold'>Login Please</h2>
            
            <div className='bg-neutral-300 p-10 rounded'>
            <form  onSubmit={handleLogin}>
                <div>
                    <label className='text-3xl'  htmlFor="email">Email:</label>
                    <input className=' rounded border-yellow-950 text-3xl px-3 py-2 mt-2 w-full h-auto' type="email" name='email' placeholder='Enter your Email' />
                </div>
                <div className='mt-4 relative'>
                    <label className='text-3xl' htmlFor="password">Password:</label>
                    <input  className='border rounded text-3xl px-3 py-2 mt-3 w-full h-auto ' type={hideShow ?'text':'password'} name='password' placeholder='Enter your password'  />
                    <div onClick={ handleShow} className='absolute top-14 right-0 cursor-pointer'>
                   {
                    hideShow ? <BsFillEyeFill  className='w-16 h-8  '/>: <BsFillEyeSlashFill  className='w-16 h-8 '/>
                   }
                    </div>
                    
                   
                </div>
                <p className='underline text-orange-500 mt-5'>Forget Password?!</p>

                <input className='w-full bg-blue-600 text-2xl py-4 rounded hover:bg-blue-800 text-white mt-5' type="submit" value="Login" />

                <p className='pt-5'>Have You new plz? <Link className='underline text-orange-800' to="/register">SinUp</Link></p>

            </form>


                <div className='flex justify-between items-center'>
                    <button onClick={handleWithGoogle} className=' bg-blue-600 text-2xl py-4 px-4 rounded hover:bg-blue-800 text-white mt-5'> Log in with Google </button>
                    <button className=' bg-blue-600 text-2xl py-4 px-4 rounded hover:bg-blue-800 text-white mt-5'> Log in with Github</button>
                    <button className=' bg-blue-600 text-2xl py-4 px-4 rounded hover:bg-blue-800 text-white mt-5'> Log in with Facebook</button>
                    <button className=' bg-blue-600 text-2xl py-4 px-4 rounded hover:bg-blue-800 text-white mt-5'> Log in with Twitter</button>
                </div>
            
            </div>
            
        </div>
    );
};

export default LogIn;