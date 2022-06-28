import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './StockService.css';

const Service = ({service}) => {
    const {_id, name, img, description, price,quantity,subPrice,subName} = service;
    const [user] = useAuthState(auth)
  
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/stock/${id}`);
    }
    const [like, setLike] = useState(100),
    [isLike, setIsLike] = useState(false)
    const  onLikeButtonClick = (id) => {
 
      setLike(like + (isLike?-1:1));
      setIsLike(!isLike);




      const data ={
        name:name,
         price:price,
         description:description,
         quantity:quantity,
        subName:subName,
        img:img,
        subPrice:subPrice,
         email:user.email,
           
       };
       const url  =` https://lit-inlet-45861.herokuapp.com/love `
       fetch(url,{
           method:'POST',
           headers:{
              'content-type': 'application/json'
           },
           body:JSON.stringify(data)
       })
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
        
       })



    };
    return (
        <div className='service'>
            <img className='' src={img} alt="" />
            <h2>{name}</h2>
           <div className='d-flex'>
           <p className='mx-4 fs-4'>Price: {subPrice}</p> 
           <p className='mx-3 fs-4'>Quantity: {service.quantity}</p>
           </div>
           <p>Contract: {service.email}</p>
            <p><small>{description}</small></p>
          <div>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Update</button>
            <button style={{border:'0',marginLeft:'5px'}}
        className={"like-button " + (isLike ? "liked" : "")}
        onClick={onLikeButtonClick}
      >
     <i className="fas fa-heart"></i>  
      </button>
          </div>

        </div>
    );
};

export default Service;