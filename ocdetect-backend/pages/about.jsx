import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext';


const about = () => {
  
  const {user} = UserAuth();
  const [loading, setLoading]=useState(true);

  useEffect(()=>{
    const checkAuthentication= async()=>{
      await new Promise((resolve)=> setTimeout(resolve, 500));
      setLoading(false);
    };
    checkAuthentication();
  },[user]);

  return (
    <div>
      {loading ? (<p>Loading...</p>):  user ? (
        <p>Welcome {user.displayName} You are logged into profile page </p>
      ):(<p>
      You must be logged in to see this </p>)}
    </div>
  )
}

export default about
