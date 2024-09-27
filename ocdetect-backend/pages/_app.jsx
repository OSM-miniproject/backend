// pages/_app.jsx
import { useEffect } from 'react';
import '../styles/index.css';
import { AuthContextProvider } from '@/context/AuthContext';
function MyApp({ Component, pageProps }) {
  // For now, this is a simple app wrapper, you can add Firebase initialization or context providers here later

  useEffect(() => {
    console.log('App initialized');
    // Here you can check the Firebase auth state globally if needed
  }, []);

  return (
    <AuthContextProvider>
      <Component {...pageProps} />;
    </AuthContextProvider>
  )
}

export default MyApp;
