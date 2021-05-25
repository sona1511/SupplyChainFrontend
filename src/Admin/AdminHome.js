import "./../App.css";

import React  from 'react'

import { useHistory } from 'react-router-dom';


function AdminHome(){
    const history = useHistory();
    const addProductHandler = () => history.push('/addProduct');
    const viewProductHandler = () => history.push('/product');
    const viewOrderHandler = () => history.push('/order');
    const viewDetailsHandler = () => history.push('/viewResDetails');
    const logoutHandler = () =>history.push('/logout')

  return (
      <div className='container' style={{marginTop: "20%"}} >
    <div class="row">
      <div className='card-body'>
        <button type="button" class="btn btn-outline-dark" onClick={addProductHandler}>Add Product</button>
      </div>
      <div className='card-body'>
        <button type="button" class="btn btn-outline-dark" onClick={viewProductHandler}>View Product</button>
      </div>
      <div className='card-body'>
        <button type="button" class="btn btn-outline-dark" onClick={viewOrderHandler}>View Order</button>
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
