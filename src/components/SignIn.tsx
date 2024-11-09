
import { GoogleLogin } from '@react-oauth/google';
import {CredentialResponse} from '@react-oauth/google'
import {  useRecoilValue, useSetRecoilState } from 'recoil';
import user from '../store/atom/user';
import {jwtDecode as jwt_decode} from 'jwt-decode'
import { Link } from 'react-router-dom';

export interface UserData {
    iss?: string,
    azp?: string,
    aud?: string,
    sub: string,
    email: string,
    email_verified?: boolean,
    nbf?: number,
    name: string,
    picture: string,
    given_name?: string,
    family_name?: string,
    iat?: number,
    exp?: number,
    jti?: string
}

const SignIn = () => {

    const userDetail = useRecoilValue(user);
    const setUserDetail = useSetRecoilState(user);
  const handleSuccess = (response : CredentialResponse) => {
    const idToken = response?.credential || '';

    
    const userData : UserData = jwt_decode(idToken);
    console.log('User Data:', userData);
    
    console.log(userDetail)
    // setUserDetail(userData);
    setUserDetail((prev)=>{
        return {
            ...prev,
            iss : userData?.iss,
            azp : userData?.azp,
            aud : userData?.aud,
            sub : userData?.sub,
            email : userData?.email,
            email_verified : userData?.email_verified,
            nbf : userData?.nbf,
            name : userData?.name,
            picture : userData?.picture,
            given_name : userData?.given_name,
            family_name : userData?.family_name,
            iat : userData?.iat,
            exp : userData?.exp,
            jti : userData?.jti
        }
    })

    console.log("after login ",userDetail)
    

    
  };

  
  console.log(userDetail);
  return (
    <div>
      <h2>Sign in with Google</h2>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log('Login Failed')}
      />
      <Link to="/">Home</Link>
    </div>
  );
};

export default SignIn;
