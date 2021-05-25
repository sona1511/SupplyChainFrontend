import React, { Component } from "react";
import OrderService from "../Services/OrderService";

class ListOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
    };
    this.backHandler = this.backHandler.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  componentDidMount() {
    OrderService.getOrders().then((response) => {
      this.setState({ order: response.data });
    });
  }

  updateOrder(order_id) {
    this.props.history.push(`/updateOrder/${order_id}`);
  }

  deleteOrder(order_id) {
    OrderService.deleteOrder(order_id).then((response) => {
      this.props.history.push("/cusHome");
    });
  }
  backHandler(){
      this.props.history.push('/cusHome')
  }
  render() {
    return (
      <div  style={{margin:"0 50px 0 50px"}}>
        <h2 className="text-center" style={{color:"white"}}>Order List</h2>
        <div className="row">
          <div className="card-body">
            <table className="table table-borderless table-dark table-hover" style={{opacity:"0.95", width:"100%"}}>
              <thead  className="thead-dark">
                <tr>
                  <td>Order ID</td>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Product Quantity</th>
                  <th>Customer_id</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.order.map((orders) => (
                  <tr key={orders.id}>
                    <td>{orders.order_id}</td>
                    <td>{orders.product.productid}</td>
                    <td>{orders.product.productName}</td>
                    <td>{orders.product.productPrice}</td>
                    <td>{orders.quantity}</td>
                    <td>{orders.customers.customerId}</td>
                    <td>
                  <button
                    className="btn btn-success"
                    onClick={() => this.updateOrder(orders.order_id)}
                  >
                    UPDATE
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.deleteOrder(orders.order_id)}
                  >
                    DELETE
                  </button>
                </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn-lg btn-primary" onClick={this.backHandler}>Back</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListOrder;
