import { googleLogout } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import user from '../store/atom/user';
import { UserData } from './SignIn';

const Home = () => {
  const [userData,setUserData] = useRecoilState<UserData|null>(user)

  const handleLogout = () => {
    googleLogout();
    setUserData(null);
    console.log('User logged out');
  };
  console.log(userData);

  return (
    <div>
      {userData ? (
        <div>
          <h2>Welcome, {userData?.name || "aniket"}!</h2>
          <h2>Welcome, {userData?.email || 'dfadfad'}!</h2>
          <h2>Welcome, {userData?.sub || 'dfasdfasdfadfafadf'}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
            <h2>Not Logged In! Please login</h2>
            <Link to="/signin">Sign in with Google</Link>
        </>
      )}
    </div>
  );
};

export default Home;
