// pages/index.jsx
'use client'

import Link from 'next/link';  //To handle navigation it's a component provided by Next in itself
import Navbar from '../components/Navbar';
import { AuthContextProvider } from '../context/AuthContext';
const HomePage = () => {
  return (
    <div>
      <AuthContextProvider>
      <Navbar/>
      <h1>Welcome to OCDetect</h1>
      <p>This is the homepage of your application.</p>
      </AuthContextProvider>
    </div>
  );
};

export default HomePage;
