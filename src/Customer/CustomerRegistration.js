import React, { Component } from 'react'
import './../CSS/Res.css'
import axios from 'axios'
import CustomerService from '../Services/CustomerService'
import { Redirect } from 'react-router-dom'



class CustomerRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customerId: '',
            firstName: '',
            lastName: '',
            password: '',
            mailId: '',
            mobileNo: '',
            address: ''

        }
        this.inputRef = React.createRef()
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    customerIdhandler = (event) => {
        this.setState({
            customerId: event.target.value
        })
    }
    firstNamehandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lastNamehandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    mailIdhandler = (event) => {
        this.setState({
            mailId: event.target.value
        })
    }
    mobileNodhandler = (event) => {
        this.setState({
            mobileNo: event.target.value
        })
    }
    addresshandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    backHandler(){
        this.props.history.push('/resHome')
    }
  

    handleSubmit = (event) => {
        event.preventDefault();
        
        let customer  ={customerId:this.state.customerId, firstName: this.state.firstName, lastName: this.state.lastName, password: this.state.password, mailId: this.state.mailId, mobileNo:this.state.mobileNo, address: this.state.address}
        CustomerService.addCustomer(customer).then(response => this.props.history.push('/resHome'));
        <Redirect to = '/resHome' />
                
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Customer Registration</h1>
                    <label>Customer Id :</label>  <input
                      type="text"
                      placeholder="Enter Some Id"
                      name="rid"
                      value={this.state.customerId}
                      onChange={this.customerIdhandler}
                      ref={this.inputRef}
                    /><br />
                    <label>First Name :</label>  <input
                      type="text"
                      placeholder="Enter First Name..."
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.firstNamehandler}
                      ref={this.inputRef}
                    /><br />
                    <label>Last Name :</label>  <input
                      type="text"
                      placeholder="Enter Last Name..."
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.lastNamehandler}
                      ref={this.inputRef}
                    /><br />
                    <label>Email Id :</label>  <input
                      type="email"
                      placeholder="Enter Email Id"
                      name="Email Id"
                      value={this.state.mailId}
                      onChange={this.mailIdhandler}
                      ref={this.inputRef}
                    /><br />
                     <label>Password :</label>
                     <input
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.passwordhandler}
                      ref={this.inputRef}/>
                    <br />
        
                    <label> Address :</label>
                     <input
                      type="text"
                      placeholder="Enter Address"
                      name="Address"
                      value={this.state.address}
                      onChange={this.addresshandler}
                      ref={this.inputRef}/>
                    <br />
                    <label>Mobile No. :</label>
                     <input
                      type="text"
                      placeholder="Enter Mobile No."
                      name="contact"
                      value={this.state.mobileNo}
                      onChange={this.mobileNodhandler}
                      ref={this.inputRef}/>
                    <br />
            
                    <input type="submit" value="Submit" />
                </form>
                <button className='btn-lg btn-primary' onClick={this.backHandler}>Back</button>
            </div>
            
        )
    }
}

export default CustomerRegister
