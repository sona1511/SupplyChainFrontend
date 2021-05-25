import axios from "axios";
import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import ProductService from "../Services/ProductService";
import OrderService from "../Services/OrderService";
import "./../CSS/Menu.css";

class CustomerProduct extends Component {
  static defaultProps = {
    // <-- DEFAULT PROPS
    product: [], // undefined gets converted to array,render won't trigger error
  };
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      if (token == null) {
        loggedIn = true;
      }
    }

    this.state = {
      products: [],
      loggedIn,
      order_id:'',
      order: []
    };
    this.backHandler = this.backHandler.bind(this);
    this.enterDetails=this.enterDetails.bind(this);
    this.paymentDetails=this.paymentDetails.bind(this);
    //this.deleteOrder =this.deleteOrder.bind(this);
  }

  addOrder(m_id) {
    this.props.history.push(`/addOrder/${m_id}`);
  }
  enterDetails() {
    this.props.history.push(`/viewCustOrder/`);
  }
  paymentDetails() {
    this.props.history.push(`/paymentHome/`);
  }

 

  componentDidMount() {
    ProductService.getProduct().then((response) => {
      this.setState({ products: response.data });
    });
    OrderService.getOrders().then((response) =>{
        this.setState({order: response.data})
    })
  }
   backHandler() {
     this.props.history.push("/cusHome");
  }

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div style={{ margin: "0 50px 0 50px" }}>
        <h2 className="text-center" style={{ color: "white" }}>
          Product List
        </h2>

        <table
          className="table table-borderless table-dark table-hover"
          style={{ opacity: "0.95", width: "100%" }}
        >
          <thead className="thead-dark">
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr key={product.productid}>
                <td>{product.productid}</td>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => this.addOrder(product.product_id)}
                  >
                    ADD ORDER
                  </button> 
                                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       
        <button className="btn-lg btn-primary" style={{marginLeft: '10px', float:"left"}} onClick={this.backHandler}>
          Back
        </button>
        <button
                    className="btn btn-info"
                    style={{ marginLeft: "10px", float:'right'}}
                    onClick={() => this.enterDetails()}
                  >VIEW ORDER
                  </button>

                  <button
                    className="btn btn-info"
                    style={{ marginLeft: "10px", float:'right'}}
                    onClick={() => this.paymentDetails()}
                  >PAYMENT
                  </button>

                  
                  
      </div>
    );
  }
}

export default CustomerProduct;