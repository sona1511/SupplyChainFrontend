import React, { Component } from 'react';

import AdminService from '../Services/AdminService';



class UpdateAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aid: this.props.match.params.aid,
            adminEmail: '',
            adminPwd: '',
            adminName: '',
            adminAddress: ''
        };
        this.inputRef = React.createRef()
        this.submitForm = this.submitForm.bind(this)
        
      }

      componentDidMount(){
          AdminService.getRes(this.state.aid)
          .then(response => {
              let admin = response.data
              this.setState({
                adminEmail: admin.adminEmail,
                adminPwd: admin.adminPwd,
                adminName: admin.adminName,
                adminAddress: admin.adminAddress
              });
          })
    }

    adminEmailhandler = (event) => {
        this.setState({
            adminEmail: event.target.value
        })
    }
    adminPwdhandler = (event) => {
        this.setState({
            adminPwd: event.target.value
        })
    }
    adminNamehandler = (event) => {
        this.setState({
            adminName: event.target.value
        })
    }
    adminAddresshandler = (event) => {
        this.setState({
            adminAddress: event.target.value
        })
    }
   
      submitForm =(event) =>{
          event.preventDefault();
          let admin  ={adminEmail: this.state.adminEmail, adminName: this.state.adminName, 
            adminPwd : this.state.adminPwd, adminAddress : this.state.adminAddress}
          AdminService.updateRes(admin,this.state.rid)
                    .then(response => this.props.history.push('/viewResDetails'));
      }
      render() {
        return (
          <div>
            <div>
              <div className="row">
                <div className="card col-md-6  offset-md-3">
                  <h3>Update Admin</h3>
                  <div className="card-body">
                    <form onSubmit={this.submitForm}>
                      <div className="form-group">
                      <label>Email Id :</label>  <input
                      type="email"
                      placeholder="Enter Email Id"
                      name="Email Id"
                      value={this.state.adminEmail}
                      onChange={this.adminEmailhandler}
                      ref={this.inputRef}
                    /><br />
                     <label>Password :</label>
                     <input
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      value={this.state.adminPwd}
                      onChange={this.adminPwdhandler}
                      ref={this.inputRef}/>
                    <br />
                    <label>Admin Name :</label>
                     <input
                      type="text"
                      placeholder="Enter name of Admin"
                      name="name"
                      value={this.state.adminName}
                      onChange={this.adminNamehandler}
                      ref={this.inputRef}/>
                    <br />
                    <label>Admin Address :</label>
                     <input
                      type="text"
                      placeholder="Enter Address"
                      name="Address"
                      value={this.state.adminAddress}
                      onChange={this.adminAddresshandler}
                      ref={this.inputRef}/>
                    <br />
                        <input type="submit"  />
                        <br />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
}
 
export default UpdateAdmin;