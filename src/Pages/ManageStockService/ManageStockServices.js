import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useStockService from '../../hooks/userStockService';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './ManageStockServices.css'

const ManageServices = () => {
    const [stockServices, setstockServices] = useStockService();
    const [user] = useAuthState(auth)
    const emailStockServis = stockServices.filter(service => service.email===user.email)
   
    const navigate = useNavigate()
const navigateEdit = id =>{
        navigate(`/edit/${id}`)
    }
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

        <div className='container fluid'>
                       <PageTitle title="Mange Itmes"></PageTitle>
            <div>
            <div  className='dash-header'>
            <h2>All products</h2>
            <p>You cna mange your product who added on this website </p>
          
            <Link to={'/addservice'}><button className='btn btn-primary'>Add a More items</button></Link>
        </div>
            </div>
            <div className='mx-auto'>
                
            <table className="table">
                <thead>

        <tr>
              <th scope="col">Img</th>
              <th scope="col">Prroduct Name</th>
              <th scope="col">Email</th>
            
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope='col'>Total</th>
              <th scope='col'>Suplayer</th>
              <th scope='col'>options</th>
        </tr>
                </thead>
      {
          stockServices.map(stockServic=><tbody>
            <tr>
              <td ><img width={40} src={stockServic.img} alt="" /></td>
              <td >{stockServic.name}</td>
              <td >{stockServic.email}</td>
              <td >{stockServic.quantity}</td>
              <td >{stockServic.subPrice}</td>
              <td >{stockServic.price}</td>
              <td >{stockServic.subName}</td>
              <td ><div> <button onClick={()=>navigateEdit(stockServic._id)}  className='btn btn-primary'>Edit</button>
        <button onClick={() => handleDelete(stockServic._id)}  className='btn btn-danger mx-2'>Dellete</button></div></td>
            </tr>
          </tbody>
)}
  
  </table>
        </div>
        
        </div>
    );
};

export default ManageServices;