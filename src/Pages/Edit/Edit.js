import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useServiceDetail from '../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../Shared/PageTitle/PageTitle';
const Edit = () => {
    const {id} = useParams(); 
    const [user] = useAuthState(auth)

    const [edit,setEdit] = useState({});
    const [stockService] = useServiceDetail(id);
    console.log(stockService)

   const handeEditForm =event=>{
    event.preventDefault() 
    toast('Edit susccesfull')
       const updateName = event.target.name.value;
       const updatupdatSubName = event.target.subname.value;
       const updatDescription = event.target.description.value;
       const updatQuantity = event.target.quantity.value;
       const updatPrice = event.target.price.value;
       const updatimg = event.target.img.value;
       const updateEmail = event.target.email.value
       const updateData ={
         name:updateName,
         price:updatPrice,
         description:updatDescription,
         quantity:updatQuantity,
        subName:updatupdatSubName,
        img:updatimg,
        email:updateEmail
         
           
      };
     
       const url  =`  https://lit-inlet-45861.herokuapp.com/edit/${id} `
       fetch(url,{
           method:'PUT',
           headers:{
              'content-type': 'application/json'
           },
           body:JSON.stringify(updateData)
       })
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
           setEdit(data)
       })

   }
   
    return (

        <div className='mx-auto w-50'>
                     <PageTitle title="Edit"></PageTitle>
            <form onSubmit={handeEditForm}>
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text"  name='name'className="form-control"  disabled value={stockService.name} required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Change name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">suplayer  name</label>
    <input type="text" name='subname' value={stockService.subname} className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="change suplayer name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">description</label>
    <input type="text"  name='description'className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter description"/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Quantity</label>
    <input type="number" name='quantity' className="form-control" required id="exampleInputPassword1" placeholder="quantity"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">price</label>
    <input type="number"  name='price' className="form-control" required id="exampleInputPassword1" placeholder="change the price"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Image</label>
    <input type="text" name='img' className="form-control" required id="exampleInputPassword1" placeholder="change you img  url"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="text" name='email' className="form-control" required value={user.email} id="exampleInputPassword1" placeholder="change your email address"/>
  </div>
  
  <button  type="submit" className="btn btn-primary mt-5">Submit</button>
</form>
  
            
        </div>
    );
};

export default Edit;