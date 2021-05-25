import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import ProductService from '../Services/ProductService';
import { Redirect } from 'react-router-dom'


class updateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productid: this.props.match.params.productid,
            productName: '',
            productPrice: ''
        };
        this.inputRef = React.createRef()
        this.submitForm = this.submitForm.bind(this)
        
      }

      componentDidMount(){
          ProductService.getProductById(this.state.productid)
          .then(response => {
              let product = response.data
              this.setState({
                  productName: product.productName,
                  productPrice: parseInt(product.productPrice)
              });
          })
    }

      productNameHandler =(event) => {
          this.setState({productName: event.target.value})
      }
      productPriceHandler =(event) =>{
          this.setState({productPrice: event.target.value})
      }
   
      submitForm =(event) =>{
          event.preventDefault();
          let price;
          let product ={productName: this.state.productName, productPrice: parseInt(this.state.productPrice)}
          ProductService.updateProduct(product,this.state.productid)
                    .then(response => this.props.history.push('/resHome'));
      }
      render() {
        return (
          <div>
            <div>
              <div className="row">
                <div className="card col-md-6  offset-md-3">
                  <h3>UPDATE Product</h3>
                  <div className="card-body">
                    <form onSubmit={this.submitForm}>
                      <div className="form-group">
                          <label>Product Name: </label>
                        <input
                          type="text"
                          placeholder="Enter the name of the food"
                          name="productName"
                          value={this.state.productName}
                          onChange={this.productNameHandler}
                          ref={this.inputRef}
                        />
                        <br />
                        <label>Price: </label>
                        <input
                          type="text"
                          placeholder="Enter the price"
                          name="productPrice"
                          value={this.state.productPrice}
                          onChange={this.productPriceHandler} 
                        />
                        <br />
                        <input type="submit"  />
                        <br />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/logout">Logout</Link>
          </div>
        );
      }
}
 
export default updateProduct;