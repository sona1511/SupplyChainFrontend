import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import ProductService from "../Services/ProductService";
import OrderService from "../Services/OrderService";

class AddOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productid: this.props.match.params.productid,
        quantity: '',
        customerId: ''
    };
    this.inputRef = React.createRef()
    this.backHandler=this.backHandler.bind(this);
    this.submitForm = this.submitForm.bind(this)
    
  }
  componentDidMount(){
    ProductService.getProductById(this.state.productid)
    .then(response => {
        let product = response.data
        this.setState({
            productName: product.productName,
            productPrice: parseInt(product.productPrice)
        });
    })
}
 
//   orderIDHandler =(event) => {
//     this.setState({order_id: event.target.value})
// }
  quantityHandler =(event) => {
      this.setState({quantity: event.target.value})
  }
 productIDHandler =(event) =>{
      this.setState({productid: event.target.value})
 } 
  customerIDHandler =(event) =>{
    this.setState({customerId: event.target.value})
}
  backHandler(){
    this.props.history.push('/viewCustProduct')
}

//
  submitForm =(event) =>{
      event.preventDefault();
      let price;
      let order={quantity: this.state.quantity, productid:this.state.productid, customerId:this.state.customerId}
      OrderService.addOrder(order, this.state.customerId, this.state.productid)
                .then(response => this.props.history.push('/cusHome'));
      <Redirect to="/cusProduct" />
  }
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="card col-md-6  offset-md-3">
              <h3>ADD ORDER</h3>
              <div className="card-body">
                <form onSubmit={this.submitForm}>
                  <div className="form-group">
                  {/* <label>Order ID: </label>
                    <input
                      type="text"
                      placeholder="Enter the Order ID"
                      name="order_id"
                      value={this.state.order_id}
                      onChange={this.orderIDHandler}
                      ref={this.inputRef}
                    /> */}
                    <br />
                      <label>Product Quantity: </label>
                    <input
                      type="number"
                      placeholder="Enter the Number of items"
                      name="productName"
                      value={this.state.quantity}
                      onChange={this.quantityHandler}
                      ref={this.inputRef}
                    />
                    <br />
                    <label>Product ID: </label>
                    <input
                      type="text"
                      placeholder="Enter the Menu ID"
                      name="productid"
                      value={this.state.productid}
                       onChange={this.productIDHandler} 
                    />
                    <br />
                    <label>Customer ID: </label>
                    <input
                      type="text"
                      placeholder="Enter the Customer ID"
                      name="customerId"
                      value={this.state.customerId}
                      onChange={this.customerIDHandler} 
                    />
                    <br />
                    <input type="submit"  />
                    <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button className='btn-lg btn-primary' onClick={this.backHandler}>Back</button>
        {/* <Link to="/logout">Logout</Link> */}
      </div>
    );
  }
}

export default AddOrder;
