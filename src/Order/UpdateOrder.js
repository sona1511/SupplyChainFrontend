import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import ProductService from '../Services/ProductService';
import { Redirect } from 'react-router-dom'
import OrderService from '../Services/OrderService';


class UpdateOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order_id:this.props.match.params.order_id,
            quantity:' ',
            customerId: ' ',
            productid:' '     
        };
        this.inputRef = React.createRef()
        this.submitForm = this.submitForm.bind(this)
        
      }

      componentDidMount(){
          OrderService.getOrderById(this.state.order_id)
          .then(response => {
            let order = response.data
              this.setState({
                quantity: order.quantity,
                  customerId: order.customerId,
                  productid: order.product.productid
              });
          })
    }

      // orderIDHandler =(event) => {
      //     this.setState({order_id: event.target.value})
      // }
      quantityHandler =(event) =>{
          this.setState({quantity: event.target.value})
      }
      customerIDHandler =(event) =>{
        this.setState({customerId: event.target.value})
    }
    productIDHandler =(event) =>{
      this.setState({productid: event.target.value})
    }

   
    backHandler = ()=>
    {
      this.props.history.push('/cusHome')
    }
      submitForm =(event) =>{
          event.preventDefault();
  //
          let orders ={ quantity: this.state.quantity, customerId: this.state.customerId, productid: this.state.productid}
          OrderService.updateOrder(orders,this.state.order_id)
                    .then(response => this.props.history.push('/cusHome'));
      }
      render() {
        return (
            <div>
              <div>
                <div className="row">
                  <div className="card col-md-6  offset-md-3">
                    <h3>UPDATE ORDER</h3>
                    <div className="card-body">
                      <form onSubmit={this.submitForm}>
                        <div className="form-group">
                        <label>Order ID: </label>
                          <input
                            type="text"
                            placeholder="Enter the Order ID"
                            name="order_id"
                            value={this.state.order_id}
                            onChange={this.orderIDHandler}
                            ref={this.inputRef}
                          />
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
                            placeholder="Enter the Product ID"
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
 
export default UpdateOrder;