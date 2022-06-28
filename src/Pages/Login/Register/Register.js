import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken.js';
import './Register.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [sendEmailVerification, sending, error1] = useSendEmailVerification( auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

if (user) {
    navigate(from, { replace: true });
}

    // console.log(error);

    if(loading || updating){
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    console.log(errorElement)
    if (token) {
        navigate('/home');
    }

    const handleRegister =  async(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    console.log(password,email);

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        // 
    }

    return (
        <div className="res">

       
        <div className="container">
            { errorElement}
        <div className="box1 ">

            <h3 className='h3'>REGISTER NOW</h3>
                <form onSubmit={handleRegister}>
                <div className="inputbox">
                  <input type="text" name="name" placeholder="name" />
                  <span><i className="fa fa-user" aria-hidden="true"></i></span>
                </div>
                <div className="inputbox">
                <input type="email" name="email"  placeholder=" email"/>
                    <span><i className="fa fa-lock" aria-hidden="true"></i></span>
                </div>
                <div className="inputbox">
                    <input type="password" name="password" placeholder=" Password"/>
                    <span><i className="fa fa-lock" aria-hidden="true"></i></span>
                </div>
            
             <div className="inputbox">
             <button  onClick={ async () => {
                    await sendEmailVerification();
                    toast('Sent email')
                }} type="submit" className="btn btn-primary text-dark">Submit</button>
                     
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

export default Register;