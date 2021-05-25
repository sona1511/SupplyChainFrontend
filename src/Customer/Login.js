import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
 
class Login extends React.Component{
    constructor(props){
    super(props)
    const token =localStorage.getItem("token")

        this.state = {
        customerId:'',
        password:'',
    }
        this.inputRef = React.createRef()
        this.handleSubmit=this.handleSubmit.bind(this)
}

customerIdhandler = (event) => {
    this.setState({
        customerId: event.target.value
    })
}

passwordhandler = (event) => {
    this.setState({
        password: event.target.value
    })
}
 
handleSubmit = (event) => {
    event.preventDefault();
    let URL = 'http://localhost:9095/customer/login?customerId='+parseInt(this.state.customerId)+'&password='+this.state.password
    console.log(this.state)
    console.log(URL)
    axios.post(URL).then(response => this.props.history.push('/cusHome'));
        <Redirect to= '/cusHome' />
        
}
 

 
render() {
    return (
        <div>

            <form onSubmit={this.handleSubmit}>
                <h1>Customer Login</h1>
                <label>Customer Id :</label>  <input
                  type="text"
                  placeholder="Enter Some Id"
                  name="rid"
                  value={this.state.customerId}
                  onChange={this.customerIdhandler}
                  ref={this.inputRef}/>
                  <br />
                 <label>Password :</label>
                 <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.passwordhandler}
                  ref={this.inputRef}/>
                 <br />
                <input type="submit" value="Submit" />
            </form>

        </div>  
        
    )
}
}
 
export default Login;