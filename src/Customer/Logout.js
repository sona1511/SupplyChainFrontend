import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Logout extends Component{
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <h1>You have been logged out!!</h1>
                <Link to="/chooseActor">Login Again</Link>
                <br></br>
                <br></br>
            </div>
        )
    }
}