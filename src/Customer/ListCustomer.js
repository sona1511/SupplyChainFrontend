import axios from 'axios';
import React, { Component} from 'react';
import { Redirect } from "react-router-dom";
import CustomerService from '../Services/CustomerService';
import "./../CSS/Menu.css";

class ListCustomer extends Component {
    static defaultProps = { // <-- DEFAULT PROPS
        customer: []       // undefined gets converted to array,render won't trigger error
    }
    constructor(props) {
        super(props)
    
        this.state = { 
            customers: []
         }
         this.backHandler=this.backHandler.bind(this);
         this.updateCustomer=this.updateCustomer.bind(this);
         this.deleteCustomer =this.deleteCustomer.bind(this);
    }
    updateCustomer(customerId) {
        this.props.history.push(`/update/${customerId}`);
    }

    deleteCustomer(customerId) {
        CustomerService.deleteCustomer(customerId)
                .then(response =>{
                    this.props.history.push('/cusHome');
                });
    }
    componentDidMount(){
        CustomerService.getCustomers()
        .then((response) => {
            this.setState({ customers: response.data} );
        });
    }
    backHandler(){
        this.props.history.push('/cusHome')
    }
    
    
  
    render() { 
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />;
          }
        return ( 
            <div className="container">
                <h2 className="text-center">Customer List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Customer Id </th>
                            <th>Customer First Name</th>
                                <th>Customer Last Name</th>
                                <th>Customer Email Id</th>
                                <th>Customer Mobile Number</th>
                                <th>Customer Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customers.map(
                                    customer =>
                                    <tr key={customer.id}>
                                        <td>{customer.customerId}</td>
                                        <td>{customer.firstName}</td>
                                        <td>{customer.lastName}</td>
                                        <td>{customer.mailId}</td>
                                        <td>{customer.mobileNo}</td>
                                        <td>{customer.address}</td>
                                        <td>
                                            <button className="btn btn-success" 
                                            onClick={() => this.updateCustomer(customer.customerId)}>UPDATE</button>
                                            <button className="btn btn-info" style={{marginLeft:"10px"}} 
                                            onClick={() => this.deleteCustomer(customer.customerId)}>DELETE</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <button className='btn-lg btn-primary' onClick={this.backHandler}>Back</button>
                </div>
            </div>
         );
    }
}
 
export default ListCustomer;