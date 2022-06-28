import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EarnSection1.css'
import earn from '../../images/earn.jpg'

const EarnSection = () => {
    const navigate = useNavigate();
    const handleEarnMoney =()=>{
        navigate('/addservice')
    }
    return (
        <section className=" contianer ">
         
<div className="row c-info bg-bg-gradient d-flex align-items-center p-5 position-relative ">
           
  <div className="col-lg-5 mt-3">

      <img src={earn} className="d-block w-100" alt="..."/>
  </div>

  <div className="col-lg-7 position-relative">
    <h1 className="c-color ">Stock Your Product</h1>
    <p className="">You can stock your product on this website and sell product of your product on our website earn money per day

    </p>
    
    <div className="d-flex align-items-center">
      <button onClick={handleEarnMoney} className="btn btn-primary">Stock Now </button></div>

  </div>
  

</div>

        </section>
    );
};

export default EarnSection;