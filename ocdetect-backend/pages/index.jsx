// pages/index.jsx
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to OCDetect</h1>
      <p>This is the homepage of your application.</p>
      <Link href="/login">Go to Login</Link>
    </div>
  );
};

export default HomePage;
