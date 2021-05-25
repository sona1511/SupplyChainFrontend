import React, { Component } from 'react'
import './../CSS/Res.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom';


class AdminRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
           aid: '',
        adminEmail: '',
        adminPwd: '',
        adminName: '',
        adminAddress: '',
        loggedIn:false

        }
        this.inputRef = React.createRef()
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    aidhandler = (event) => {
        this.setState({
            aid: event.target.value
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
  

    handleSubmit = (event) => {
        event.preventDefault();
       
        console.log(this.state)
        alert("Registered Successfully")
        axios
        .post('http://localhost:9095/Admin/Register',this.state)
                .then(response =>{
                    console.log(response)
                })
                .catch(error =>{
                    console.log(error)
                   
                })
                this.setState({
                    loggedIn: true
                })
          
    }
   

    render() {
             if(this.state.loggedIn){
                return <Redirect to="/resLogin" />
             }
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Admin Registration</h1>
                    <label>Admin Id :</label>  <input
                      type="text"
                      placeholder="Enter Some Id"
                      name="aid"
                      value={this.state.aid}
                      onChange={this.aidhandler}
                      ref={this.inputRef}
                    /><br />
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
            
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default AdminRegister
