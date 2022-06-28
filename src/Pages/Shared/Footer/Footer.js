
import React from 'react';
import './Footer.css'
import footer1 from '../../../images/footer/footer1.png'
import footer2 from '../../../images/footer/foote2.jpg'
import footer3 from '../../../images/footer/foot3.jpg'
const Footer = () => {
    const today = new Date();
const year = today.getFullYear();
    return (
        <div className='footer-cotianer d-flex align-itmes-center justify-content-center mt-5 '>
           <div className='mt-4'>
           <h1 className='text-center'>Stock Marketing</h1>
         
           <p className='text-center'></p>
           <small className='text-center mx-auto d-block'>copy right <span className='text-danger'>©</span> by {year} facebook.com</small>
           <div className='d-flex  mx-auto '>
            <a href='/www.google.com'> <img  className='mx-3 img1'width={60} src={footer1} alt="" /></a>
            <a href='/www.google.com'><img  className='mx-3' height={65} width={65} src={footer2} alt="" /></a>
            <a href='/www.google.com'><img  height={65} width={65} src={footer3} alt="" /></a>
           </div>
           </div>
           
        </div>
    );
};

export default Footer;