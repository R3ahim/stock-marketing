import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { PageItem } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './LoveSelect.css'
const Order = () => {
    <PageTitle title={'loveSelected'}></PageTitle>
    const [user] = useAuthState(auth);
    // console.log(user)
    const [loveOrders, setloveOrders] = useState([]);
    console.log(loveOrders);
    const loveOrdersFilter = loveOrders.filter(loveOrder=>loveOrder.email === user.email);
    // console.log(loveOrdersFilter);
    
  
    const navigate = useNavigate();
    useEffect( () => {
        
        const getloveOrders = async() =>{
            const email = user?.email;
            const url = ` https://lit-inlet-45861.herokuapp.com/love?email=${email}`;
            console.log(url);
            try{
                const {data} = await axiosPrivate.get(url);
                setloveOrders(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getloveOrders();

    }, [])
    return (
        <div>
                 <PageTitle title="Love Itmes"></PageTitle>
            <div  className='dash-header'>
            <h2>Loved Item</h2>
            <p>What you loved home you can see there! it's the speacial futurue our gold user </p>
            </div>
      
        <div className='w-50 mx-auto'>
   
            {
                loveOrdersFilter.map(boxLove =><div key={boxLove._id}>
                      <div className='review-item'>
            <div>
                <img src={boxLove.img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={boxLove.name}>
                      {boxLove.name}
                    </p>
                    <p>Price: <span className='orange-color'>${boxLove.price}</span></p>
                    <p><small>Shipping: ${boxLove.email}</small></p>
                    <p><small>Quantity: {boxLove.quantity}</small></p>
                </div>
             
            </div>
        </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default Order;