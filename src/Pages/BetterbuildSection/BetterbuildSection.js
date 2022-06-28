import React from 'react';
import './BetterbuildSection.css'
const BetterbuildSection = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>better build section</h1>

            <div className="box-contianer ">
                <div className='box border '>
                    <img className='' src="https://reactheme.com/products/wordpress/finanix/wp-content/uploads/2022/04/service-bag.jpg" alt="" />
                    <h2>Earn Money</h2>
                    <p className='text-center'>We help How to eanr money on this website</p>
                   
                </div>
                <div className='box border'>
                    <img src="https://reactheme.com/products/wordpress/finanix/wp-content/uploads/2022/04/service-book.jpg" alt="" />
                    <h2>Business instraction</h2>
                    <p className='text-center'>Well help you understand your business and customer insights while</p>
                </div >
                <div className='box border'>
    <img src="https://reactheme.com/products/wordpress/finanix/wp-content/uploads/2022/04/servicee-user.jpg" alt="" />
    <h2>People & Change</h2>
                    <p className='text-center'>Well help you Find different countries customer and stock broker</p>
                </div>
            </div>
        </div>
    );
};

export default BetterbuildSection;