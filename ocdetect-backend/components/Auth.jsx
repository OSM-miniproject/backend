// components/Auth.jsx
import { useEffect } from 'react';
import { auth } from '../firebase/firebasecofig'; // Adjust the path if needed
import dynamic from 'next/dynamic';

// Dynamically import FirebaseUI only on the client side
const FirebaseUI = dynamic(() => import('firebaseui'), { ssr: false });

const Auth = () => {
    useEffect(() => {
        const loadFirebaseUI = async () => {
            if (typeof window !== 'undefined') {
                // Attempt to load firebaseui
                const firebaseui = await FirebaseUI;

                // Log firebaseui to see if it loads correctly
                console.log('FirebaseUI:', firebaseui);

                // Check if firebaseui is defined before accessing its properties
                if (firebaseui && firebaseui.auth) {
                    const ui = new firebaseui.auth.AuthUI(auth); // Use auth from firebaseConfig

                    const uiConfig = {
                        signInSuccessUrl: '/', // Redirect URL after sign-in
                        signInOptions: [
                            {
                                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                                // Add additional options as needed
                            },
                        ],
                    };

                    ui.start('#firebaseui-auth-container', uiConfig); // Initialize FirebaseUI
                } else {
                    console.error('FirebaseUI or firebaseui.auth is not defined');
                }
            }
        };

        loadFirebaseUI(); // Call the function to load FirebaseUI
    }, []);

    return (
        <div>
            <h1>Login</h1>
            <div id="firebaseui-auth-container"></div>
        </div>
    );
};

export default Auth;
