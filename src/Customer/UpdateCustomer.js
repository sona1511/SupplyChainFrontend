import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import CustomerService from '../Services/CustomerService';
import { Redirect } from 'react-router-dom'


class UpdateCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customerId: this.props.match.params.customerId,
            firstName: '',
            lastName: '',
            password: '',
            mailId: '',
            mobileNo: '',
            address: ''
        };
        this.inputRef = React.createRef()
        this.submitForm = this.submitForm.bind(this)
        
      }

      componentDidMount(){
          CustomerService.getCustomerById(this.state.customerId)
          .then(response => {
              let customer = response.data
              this.setState({
                firstName: customer.firstName,
                lastName: customer.lastName,
                password: customer.password,
                mailId: customer.mailId,
                mobileNo: customer.mobileNo,
                address: customer.address 
              });
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

  cancelHandler(){
    this.props.history.push('/resHome');
    // <Redirect to= '/viewCustDetails' />
  }
   
      submitForm =(event) =>{
          event.preventDefault();
          let customer  ={firstName: this.state.firstName, lastName: this.state.lastName, password: this.state.password, mailId: this.state.mailId, mobileNo:this.state.mobileNo, address: this.state.address}
          CustomerService.updateCustomer(customer,this.state.customerId)
                    .then(response => this.props.history.push('/viewCustDetails'));
      }
      render() {
        return (
          <div>
            <div>
              <div className="row">
                <div className="card col-md-6  offset-md-3">
                  <h3>Update Customer</h3>
                  <div className="card-body">
                    <form onSubmit={this.submitForm}>
                      <div className="form-group">
                      <label>First Name :</label> 
                       <input type="text"
                      placeholder="Enter First Name..."
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.firstNamehandler}
                      ref={this.inputRef}
                    /><br />
                    <label>Last Name :</label> 
                     <input type="text"
                      placeholder="Enter Last Name..."
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.lastNamehandler}
                      ref={this.inputRef}
                    /><br />
                    <label>Email Id :</label> 
                     <input type="email"
                      placeholder="Enter Email Id"
                      name="Email Id"
                      value={this.state.mailId}
                      onChange={this.mailIdhandler}
                      ref={this.inputRef}
                    /><br />
                     <label>Password :</label>
                     <input type="password"
                      placeholder="Enter Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.passwordhandler}
                      ref={this.inputRef}/>
                    <br />
        
                    <label> Address :</label>
                     <input  type="text"
                      placeholder="Enter Address"
                      name="Address"
                      value={this.state.address}
                      onChange={this.addresshandler}
                      ref={this.inputRef}/>
                    <br />
                    <label>Mobile No. :</label>
                     <input type="text"
                      placeholder="Enter Mobile No."
                      name="contact"
                      value={this.state.mobileNo}
                      onChange={this.mobileNodhandler}
                      ref={this.inputRef}/>
                    <br />
                        <input type="submit"  />
                        <br />
                      </div>
                    </form>
                    <button className='btn-lg btn-primary' onClick={this.cancelHandler}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
}
 
export default UpdateCustomer;