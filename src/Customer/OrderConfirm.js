import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class OrderConfirm extends Component{
    constructor(props){
        super(props)
    
    }
    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <h1>Order Confirm, Enjoy your Product!!!!</h1>
                <br></br>
                <Link to="/cusHome">Go Back to Customer Home Page</Link>
                <br></br>
                <br></br>
                <Link to ="/viewCustMenu">Go Back to Product Page</Link>
                <br></br>
            </div>
        )
    }
}