import React from 'react';
import './Banner.css'
import banner1 from '../../../images/banner/banner2.jpg'
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Banner = () => {

  
   
    const navigate = useNavigate();
const handleNavigate = ()=>{
        navigate(`/manage`);
    };
    return (
        <div className='d-flex align-itmes-center justify-content-center px-4 banner-container' style={{background:'',height:''}}>
            <div className='w-50 ' style={{marginTop:'100px '}}>
               <h1 className='banner-h1'> Everything</h1>
               <h1 className='banner-main'>You Need</h1>
        <p className='text-secondary fs-4'><small>You can find Everything what you need which phone and which color phone </small></p>
              <button onClick={handleNavigate} className='btn btn-danger'>SERVICES</button>
            </div>
            <div className='mt-5'>
             <img style={{width:'700px'}} src={banner1} alt=''></img>

            </div>
           
            
        </div>
    );
};

export default Banner;