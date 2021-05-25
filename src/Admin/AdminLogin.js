import React from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
 
class Login extends React.Component{
    constructor(props){
    super(props)
   

        this.state = {
        aid:'',
        adminPwd:'',
    }
        this.inputRef = React.createRef()
        this.handleSubmit=this.handleSubmit.bind(this)
}

aidhandler = (event) => {
    this.setState({
        aid: event.target.value
    })
}

adminPwdhandler = (event) => {
    this.setState({
      adminPwd: event.target.value
    })
}
 
handleSubmit = (event) => {
    event.preventDefault();
    let URL = 'http://localhost:9095/Admin/login?aid='+parseInt(this.state.aid)+'&adminPwd='+this.state.adminPwd
    console.log(this.state)
    axios.post(URL).then(response => this.props.history.push('/resHome'));
        <Redirect to= '/resHome' />
            
}

 
render() {
    return (
        <div>

            <form onSubmit={this.handleSubmit}>
                <h1>Admin Login</h1>
                <label>Admin Id :</label>  <input
                  type="text"
                  placeholder="Enter Id"
                  name="aid"
                  value={this.state.aid}
                  onChange={this.aidhandler}
                  ref={this.inputRef}/>
                  <br />
                 <label>Password :</label>
                 <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={this.state.adminPwd}
                  onChange={this.adminPwdhandler}
                  ref={this.inputRef}/>
                 <br />
                <input type="submit" value="Submit" />
            </form>

        </div>  
        
    )
}
}
 
export default Login;