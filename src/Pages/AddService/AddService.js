import React, { useState } from 'react';
import { set, useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import PageTitle from '../Shared/PageTitle/PageTitle';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    <PageTitle title={'AddStockService'}></PageTitle>
    const [price ,setPrice] = useState()
    const handlePriceChange = (event)=>{
        const value = event.target.value;
        setPrice(value)

    }
    console.log(price);
    const onSubmit = data => {

        console.log(data);
        const url = ` https://lit-inlet-45861.herokuapp.com/stockService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
        toast('added successfull')
    };


    return (
        <div className=''>
           <PageTitle title="AddInventories"></PageTitle>
            <div  className='dash-header'>
            <h2>Add product Earn money</h2>
            <p>You can earn on this website <span className='text-danger'>!</span> buy sell your product </p>
        
            
    </div>
    <div className='mx-auto w-50'>
        <h3 className='text-center mb-3'>please add you product</h3>
        
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <div  className='form-group'>

           
                <input className='mb-2 form-control' required placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2 form-control' required placeholder='subName' {...register("subName", { required: true, maxLength: 20 })} />
                <textarea className='mb-2 form-control' required placeholder='Description' {...register("description")} />
                <input className='mb-2 form-control' onChange={handlePriceChange} required placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2 form-control 'required placeholder='what you price added ' type="number" {...register("subPrice")} />
                <input className='mb-2 form-control' required placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2 form-control' required placeholder='quantity' type="number" {...register("quantity")} />
                <input className='mb-2 form-control' required placeholder='email' type="text" {...register("email")} />
                <input className='btn btn-primary' type="submit" value="Add Service" />
               
                </div>
            </form>
            
    </div>
        </div>
    );
};

export default AddService;

