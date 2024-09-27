import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading]= useState(true);

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignOut = async()=>{
        try{
            await logOut();
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        const checkAuthentication = async () => {
            await new Promise((resolve)=>setTimeout(resolve, 500))
            setLoading(false); 
        }
        checkAuthentication()
    },[user])

    return (
        <div className='h-20 w-full border-b-2 flex items-center justify-between p-4'>
            <ul className='flex items-center space-x-6'>
                <li className='cursor-pointer'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link href='/profile'>Profile</Link>
                </li>
            </ul>


             {loading ? null : !user?(<ul className='flex items-center space-x-6'>
                <li onClick={handleSignIn} className='cursor-pointer'>
                    Login
                </li>
                <li onClick={handleSignIn} className='cursor-pointer'>
                    Signup
                </li>
            </ul>):(
                <div>
                    <p>Welcome, {user.displayName}</p>
                    <p className='cursor-pointer' onClick={handleSignOut}>Sign out</p>
                </div>
             )}
            
        </div>
    );
};

export default Navbar;
