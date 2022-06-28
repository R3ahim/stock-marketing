import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useStockService from '../../hooks/userStockService';
import PageTitle from '../Shared/PageTitle/PageTitle';

const MyItems = () => {
    const [stockServices, setstockServices] = useStockService();
    const [user] = useAuthState(auth)
    const emailStockServis = stockServices.filter(service => service.email===user.email)
   

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = ` https://lit-inlet-45861.herokuapp.com/stockService/${id}`;
            fetch(url, {
            method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = stockServices.filter(service => service._id !== id);
                setstockServices(remaining);
            })
        }
    }
    return (
        <div id="services" className='container'>
                       <PageTitle title="My-itmes"></PageTitle>
 <div  className='dash-header'>
            <h2>Your items </h2>
    <p>How much product you have added on this product</p>
      
            
        </div>
                          
              <div className="row">
              <div className="services-container">
            

        {
            emailStockServis.map(manageInv=> 
           
         
            <div className='service'>
        <img className='img-mange' src={manageInv.img} alt="" />
        <h2>{manageInv.name}</h2>
        <div className='d-flex'>
           <p className='mx-4 fs-4'>Price: {manageInv.subPrice}</p> 
           <p className='mx-3 fs-4'>Quantity: {manageInv.quantity}</p>
           </div>
           
            <p><small>{manageInv.description}</small></p>
        
        <button onClick={() => handleDelete(manageInv._id)}  className='btn btn-danger mx-2'>Trash to My Items</button>
    </div>
          
           )
        }
        </div>
        </div>
    </div>
    );
};

export default MyItems;