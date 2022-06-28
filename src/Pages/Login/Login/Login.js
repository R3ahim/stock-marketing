import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

import useToken from '../../../hooks/useToken.js';
import './Login.css'

const Login = () => {
    <PageTitle title={'Login'}></PageTitle>
   
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
    const password = event.target.password.value;
       
        await signInWithEmailAndPassword(email, password);
    }

 
    const resetPassword = async (event) => {
        const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    return (
      
             <div className="res">

       
<div className="container">
<div className="box1 ">
    <h3>Please Login</h3>
    {errorElement}
        <form onSubmit={handleSubmit}>
        
        <div className="inputbox">
        <input type="email" name="email"  placeholder="email"/>
        </div>
        <div className="inputbox">
            <input type="password" name="password" placeholder=" Password"/>
            
            <p><small><button className='forgetpassword' onClick={resetPassword}>Forget password</button></small></p>
        </div>
    
     <div className="inputbox">
       <button type="submit" name="FINISH" value="submit">FINISH</button>
        
        <Link to={'/register'}>New user Register</Link>
     </div>

 <div className="box12">
   <SocialLogin></SocialLogin>
 </div>

</form>    
</div>  
</div>
</div>
            
     
    );
};

export default Login;