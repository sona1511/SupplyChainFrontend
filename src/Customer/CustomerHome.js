import "./../App.css";

import React  from 'react'

import { useHistory } from 'react-router-dom';


function AdminHome(){
    const history = useHistory();
    const viewProductHandler = () => history.push('/viewCustProduct');
    const viewDetailsHandler = () => history.push('/viewCustDetails');
    const logoutHandler = () =>history.push('/logout')
    //const PaymentHandler = () =>history.push('./paymentHome')

 return (
      <div className='container' style={{marginTop: "20%"}} >
    <div class="row">
      <div className='card-body'>
        <button type="button" class="btn btn-outline-dark" onClick={viewProductHandler}>View Product</button>
      </div>
      <div className='card-body'>
        <button type="button" class="btn btn-outline-dark" onClick={viewDetailsHandler}>View My Details</button>
      </div>
      <div className='card-body'>
        <button type="button" class="btn btn-outline-dark" onClick={logoutHandler}>LOGOUT</button>
      </div>
      </div>
    </div>
  );
    
}

export default AdminHome;
