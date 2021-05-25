import React, { Component} from 'react';
import { Redirect } from "react-router-dom";
import AdminService from '../Services/AdminService';
import "./../CSS/Menu.css";

class AdminProfile extends Component {
    static defaultProps = { 
        admin: []       
    }
    constructor(props) {
        super(props)
    
        this.state = { 
            admin: []
         }
         this.backHandler=this.backHandler.bind(this);
         this.updateRes=this.updateRes.bind(this);
         this.deleteRes =this.deleteRes.bind(this);
    }
    updateRes(aid) {
        this.props.history.push(`/update/${aid}`);
    }

    deleteRes(aid) {
        AdminService.deleteRes(aid)
                .then(response =>{
                    this.props.history.push('/resHome');
                });
    }
    componentDidMount(){
        console.log("component")
        AdminService.getRes()
        .then((response) => {
            this.setState({ admin: response.data} );
        });
    }
    backHandler(){
        this.props.history.push('/resHome')
    }
    
    
  
    render() { 
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />;
          }
        return ( 
            <div className="container">
                <h2 className="text-center" id="x">Profile</h2><br/>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Admin Id </th>
                            <th>Email Id</th>
                                <th>Admin Name</th>
                                <th>Admin Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.admin.map(
                                    admin =>
                                    <tr key={admin.aid}>
                                        <td>{admin.aid}</td>
                                        <td>{admin.adminEmail}</td>
                                        <td>{admin.adminName}</td>
                                        <td>{admin.adminAddress}</td>
                                        <td>
                                            <button className="btn btn-success" 
                                            onClick={() => this.updateRes(admin.aid)}>UPDATE</button>
                                            <button className="btn btn-info" style={{marginLeft:"10px"}} 
                                            onClick={() => this.deleteRes(admin.aid)}>DELETE</button>
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
 
export default AdminProfile;