// pages/login.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../firebase/firebasecofig'; // Make sure this path is correct
import Auth from '../components/Auth';

const LoginPage = () => {
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                router.push('/dashboard'); // Redirect logged-in users
            }
        });
        
        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [router]);

    return (
        <div>
            <h1>Login</h1>
            <Auth />
        </div>
    );
};

export default LoginPage;
