import React, { useContext, useState } from 'react';
import { BsFillEyeSlashFill,BsFillEyeFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../ContexProvider/ContexProvider';
const SingUp = () => {
    const {createUser} = useContext(AuthProvider);
    const [passHide,setPassHide] = useState(false);
    const [cpassHide, setCpassHide] = useState(false);
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailEorror] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleCpass = () =>{
        setCpassHide(!cpassHide)
    }
    const handlePass =() =>{
        setPassHide(!passHide)
    }

    const handleSinUp = (e) =>{
        e.preventDefault();
        const form = e.target;
        setError('')
        if(passwordError){
            setError('Password is not Correct')
        }else if(emailError){
            setError("Email is not valid")
        }
        else if(password !== cpassword){
            setError("Password and Confirm password do not match");
        }else{

            createUser(email,password)
            .then(result =>{
                const user = result.user;
                
               
                // console.log(user)
                // setName('')
                // setEmail('');
                // setPassword('');
                // setCpassword('')
              
               
            return user.updateProfile({
                displayName: name
              });
                  
                
            })
            .then(function() {
                // User profile update successful
                console.log("User created with display name: " + auth.currentUser.displayName);
              })
            
            .catch(error =>{
                const errorMessage = error.message;
                setError(errorMessage)
            })
            
            
        }
        
        
    }
    const changeName = (e) =>{
        const name = e.target.value;
        setName(name)
        
    }
    const changeEmail = (e) =>{
        const email = e.target.value;
        setEmailEorror('');

        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            setEmailEorror('Email is not valid');
        }

         setEmail(email);
    }
    const changePassword = e =>{
        const password = e.target.value;
        setPasswordError('');
        if(!/^(?=.*[A-Z])/.test(password)){
            setPasswordError('Password created at least one Uppercase');
          
        }else if(!/(?=.*\d)/.test(password)){
            setPasswordError('Password created at least one digit');
            
        }
        else if(!/(?=.*[@$!%*?&])/.test(password)){
            setPasswordError('Password created at least one special symbol');
            
        }else if(!/[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            setPasswordError('Password At least 8 characters long');
        }

            setPassword(password);
        
    }
    const changeCpassword = e =>{
        const cPassword = e.target.value;
        setCpassword(cPassword)
    }
    //console.log(email,password,cpassword,name)
    return (
        <div  className='mt-16 px-28 mb-12 '>
            <h2 className='text-4xl text-center mb-11 font-serif font-semibold'>SingUp Here!</h2>
            <p>{error}</p>
            <form onSubmit={handleSinUp}  className='bg-neutral-300 p-10 rounded'>
            <div>
                    <label className='text-3xl'  htmlFor="name">Name:</label>
                    <input onChange={changeName} value={name} className=' rounded border-yellow-950 text-3xl px-3 py-2 mt-2 w-full h-auto' type="name" name='name' placeholder='Enter your Email' />
                </div>
                <div>
                    <label className='text-3xl'  htmlFor="email">Email:</label>
                    <input onChange={changeEmail} value={email} className=' rounded border-yellow-950 text-3xl px-3 py-2 mt-2 w-full h-auto' type="email" name='email' placeholder='Enter your Email' />
                    <p className='text-red-500'>{emailError}</p>
                </div>
                <div className='mt-4 relative'>
                    <label className='text-3xl' htmlFor="password">Password:</label>
                    <input value={password} onChange={changePassword} className='border rounded text-3xl px-3 py-2 mt-3 w-full h-auto' type={passHide ?'text':'password'} name='password' placeholder='Enter your password' />
                    <div onClick={handlePass} className='absolute top-14 right-0 cursor-pointer'>
                        {
                            passHide ?<BsFillEyeFill  className='w-16 h-8  '/> : <BsFillEyeSlashFill  className='w-16 h-8 '/>
                        }
                    </div>
                    <p className='text-red-500'>{passwordError}</p>
                </div>
                <div className='mt-4 relative'>
                    <label className='text-3xl' htmlFor="Cpassword">Confirm Password:</label>
                    <input value={cpassword} onChange={changeCpassword}  className='border rounded text-3xl px-3 py-2 mt-3 w-full h-auto' type={cpassHide ?'text':'password'} name='Cpassword' placeholder='Enter your password' />
                    <div onClick={handleCpass} className='absolute top-14 right-0 cursor-pointer'>
                        {
                            cpassHide ? <BsFillEyeFill  className='w-16 h-8  '/> : <BsFillEyeSlashFill  className='w-16 h-8 '/> 
                        }
                   
                      
                   
                    </div>
                </div>
                <div className='mt-3 border border-red-500 rounded p-4'>
                    <h1 className='text-2xl text-red-400'>Note:</h1>
                    <p>1.Password length at least 8 characters</p>
                    <p>2.Password try to strong.</p>
                    <p>3. Password uses  at least one uppercase letter</p>
                    <p>4. Password uses  at least one special characters</p>
                    <p>5. Password uses  number 0-8</p>
                </div>

                

                <input className='w-full bg-blue-600 text-2xl py-4 rounded hover:bg-blue-800 text-white mt-10' type="submit" value="SingUp" />
                <p className='mt-4'>You have already account? <Link to="/login" className='underline text-blue-700'>Login</Link></p>

            </form>
        </div>
    );
};

export default SingUp;