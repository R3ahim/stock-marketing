import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import PageTitle from '../Shared/PageTitle/PageTitle';

const StockDetail = () => {
    const { serviceId } = useParams();
    const [stockService] = useServiceDetail(serviceId);
    const [stock, setStock] = useState({});
    const [quantyty, setQuantity] = useState(0)



    const handleQuantity = () => {
        const updateQuantity = stockService.quantity - 1;
        const price = updateQuantity * stockService.subPrice;
        stockService.price = price
        stockService.quantity = updateQuantity;
        const updateData = {
            name: stockService.name,
            price: stockService.price,
            description: stockService.description,
            quantity: stockService.quantity,

            subName: stockService.subName,
            img: stockService.img

        }
        console.log(updateData)


        setQuantity(updateQuantity);
        const url = `  https://lit-inlet-45861.herokuapp.com/stock/${serviceId} `
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })



    }
    const hanldeInputAdd = (event) => {
        event.preventDefault()
        const updateQuantity = parseFloat(event.target.increaseNumber.value) + parseFloat(stockService.quantity);
        const price = updateQuantity * stockService.subPrice;
        stockService.price = price

        stockService.quantity = updateQuantity;
        const updateData = {
            name: stockService.name,
            price: stockService.price,
            description: stockService.description,
            quantity: stockService.quantity,
            subName: stockService.subName,
            img: stockService.img

        }
        console.log(updateData)


        setQuantity(updateQuantity);
        const url = `  https://lit-inlet-45861.herokuapp.com/stock/${serviceId} `
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }


    useEffect(() => {
        const url = `  https://lit-inlet-45861.herokuapp.com/stock/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setStock(data))
    }, [])



    return (
        <div>
            <div>

           
            <div className='d-flex align-items-center justify-content-center'>
            <PageTitle title="StockDetail"></PageTitle>
                <div>
                    <img style={{ width: '500px' }} src={stockService.img} alt="" />
                </div>
                <div className='w-100'>
                <div className='w-50 mx-auto'>
     

                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">name</th>
                                <th scope="col">first</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >Name</td>
                                <th scope="row">{stockService.name}</th>

                            </tr>
                            <tr>
                                <td>Seller</td>
                                <th scope='row'>{stockService.subName}</th>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <th scope='row'>{stockService.subPrice}</th>
                            </tr>
                            <tr>
                                <td>Quantity</td>
                                <th scope='row' className='text-primary'>{stockService.quantity}</th>
                            </tr>
                            <tr>
                                <td>Price Quantity</td>
                                <th scope='row' className='text-primary'>{stockService.price}</th>
                            </tr>
                            <tr>
                                <td>Contract</td>
                                <th scope='row' className=''>{stockService.email}</th>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <th scope='row' className='text-primary'>{stockService.description}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='d-flex justify-content-evenly mx-auto p-0 float-left'>
<div>

<button className='btn btn-primary mx-2' onClick={handleQuantity}>Deleverd</button>
</div>
<form onSubmit={hanldeInputAdd}>
        <input className='w-25' type="number" name="increaseNumber" id="" />
        <button w-0 type='submit' className="btn btn-success">Add</button>
    </form>
<div className='mx-auto w-25'>
   
</div>
</div>
                </div>
                
            </div>
           
        </div>
        </div>


    );
};

export default StockDetail;