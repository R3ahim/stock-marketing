import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Service from '../StockServic/StockService';
import './StockServices.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch(' https://lit-inlet-45861.herokuapp.com/stockService')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    
    


    return (
        <div  className='container'>
              
            
            <div className="row">
            <h1 className=' text-center mt-5'>Trending Products</h1>
            <div className="services-container">
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;