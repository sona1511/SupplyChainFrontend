import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import ProductService from "../Services/ProductService";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productid: '',
        productName: '',
        productPrice: ''
    };
    this.inputRef = React.createRef()
    this.backHandler=this.backHandler.bind(this);
    this.submitForm = this.submitForm.bind(this)
    
  }
 
  productnameHandler =(event) => {
      this.setState({productName: event.target.value})
  }
  productpriceHandler =(event) =>{
      this.setState({productPrice: event.target.value})
  }
  productIDHandler =(event) =>{
    this.setState({productid: event.target.value})
}
  backHandler(){
    this.props.history.push('/resHome')
}


  submitForm =(event) =>{
      event.preventDefault();
      let price;
      let product ={productid:this.state.productid, productName: this.state.productName, productPrice: parseInt(this.state.productPrice)}
     

      ProductService.addProduct(product)
                .then(response => this.props.history.push('/resHome'));
      <Redirect to="/resHome" />
  }
  render() {
    return (
      
        <div style={{marginTop:"100px"}}>
          <div className="card col-md-6  offset-md-3">
              <h3>ADD Product</h3>
            <div className="card-column" style={{margin:'auto auto'}}></div>
              <div className="card-body">
                <form onSubmit={this.submitForm}>
                  <div className="form-group">
                  <label>Product ID: </label>
                    <input
                      type="text"
                      placeholder="Enter the ID"
                      name="productid"
                      value={this.state.productid}
                      onChange={this.productIDHandler}
                      ref={this.inputRef}
                    />
                      <label>Product Name: </label>
                    <input
                      type="text"
                      placeholder="Enter the name of the food"
                      name="productName"
                      value={this.state.productName}
                      onChange={this.productnameHandler}
                      ref={this.inputRef}
                    />
                    <br />
                    <label>Price: </label>
                    <input
                      type="text"
                      placeholder="Enter the price"
                      name="productPrice"
                      value={this.state.productPrice}
                      onChange={this.productpriceHandler} 
                    />
                    <br />
                    <input type="submit"  />
                    <br />
                  </div>
                </form>
              </div>
            
            </div>
          
        <button className='btn-lg btn-primary' onClick={this.backHandler}>Back</button>
        {/* <Link to="/logout">Logout</Link> */}
      </div>
     
    );
  }
}

export default AddProduct;
