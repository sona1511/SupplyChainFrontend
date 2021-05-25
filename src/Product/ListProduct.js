import axios from 'axios';
import React, { Component} from 'react';
import { Redirect } from "react-router-dom";
import ProductService from '../Services/ProductService';
import "./../CSS/Menu.css";

class ListProduct extends Component {
    static defaultProps = { // <-- DEFAULT PROPS
        product: []       // undefined gets converted to array,render won't trigger error
    }
    constructor(props) {
        super(props);
       
    
        this.state = { 
            products: [],
            
         }
         this.backHandler=this.backHandler.bind(this);
         this.updateProduct=this.updateProduct.bind(this);
         this.deleteProduct =this.deleteProduct.bind(this);
    }
    updateProduct(productid) {
        this.props.history.push(`/updateProduct/${productid}`);
    }

    deleteProduct(productid) {
        ProductService.deleteProduct(productid)
                .then(response =>{
                    this.props.history.push('/resHome');
                });
    }
    componentDidMount(){
        ProductService.getProduct()
        .then((response) => {
            this.setState({ products: response.data} );
        });
    }
    backHandler(){
        this.props.history.push('/resHome')
    }
    
    
  
    render() { 
        if (this.state.loggedIn === true) {
            return <Redirect to="/" />;
          }
        return ( 
            <div className="container">
                <h2 className="text-center">Product List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(
                                    product =>
                                    <tr key ={product.productid}>
                                        <td>{product.productName}</td>
                                        <td>{product.productPrice}</td>
                                        <td>
                                            <button className="btn btn-success" 
                                            onClick={() => this.updateProduct(product.productid)}>UPDATE</button>
                                            <button className="btn btn-info" style={{marginLeft:"10px"}} 
                                            onClick={() => this.deleteProduct(product.productid)}>DELETE</button>
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
 
export default ListProduct;