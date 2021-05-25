import "./../App.css";
import Nav from "./Nav";
import ChooseActor from "./ChooseActor";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "../Components/Admin";
import Customer from "../Components/Customer";
import AdminLogin from "../Admin/AdminLogin";
import AdminRegister from "../Admin/AdminRegister";
import Login from "../Customer/Login";

import Logout from "../Customer/Logout";
import CustomerRegistration from "../Customer/CustomerRegistration";
import ListProduct from "./../Product/ListProduct";
import AddProduct from "../Product/AddProduct";
import UpdateProduct from "../Product/UpdateProduct";
import ListOrder from "../Order/ListOrder";
import AdminHome from "../Admin/AdminHome";
import CustomerProduct from "../Product/CustomerProduct";
import CustomerHome from "../Customer/CustomerHome";
import ListCustomer from "../Customer/ListCustomer";
import UpdateCustomer from "../Customer/UpdateCustomer";
import resProfile from "../Admin/AdminProfile";
import UpdateRes from '../Admin/UpdateAdmin';
import AddOrder from './../Order/AddOrder';
import UpdateOrder from './../Order/UpdateOrder';
import PaymentHome from "../Customer/PaymentHome";
import OrderConfirm from "../Customer/OrderConfirm";
import PaymentForm from "../Customer/PaymentForm";


function Home() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/chooseactor" component={ChooseActor} />
          <Route path="/admin" component={Admin} />
          <Route path="/customer" component={Customer} />
          <Route path="/resLogin" component={AdminLogin} />
          <Route path="/resSignup" component={AdminRegister} />
          <Route path="/cusLogin" component={Login} />
          <Route path="/cusSignup" component={CustomerRegistration} />
          <Route path="/product" component={ListProduct} />
          <Route path="/order" component={ListOrder} />
          <Route path="/logout" component={Logout} />
          <Route path="/addProduct" component={AddProduct} />
          <Route path="/paymentHome" component={PaymentHome} />
          <Route path="/cod" component={OrderConfirm} />
          <Route path="/creditCard" component={PaymentForm} />
          
          <Route path={"/updateProduct/:productid"} render={(props) =>
       <UpdateProduct {...props} key={props.match.params.id} />
       
      }
     />
     <Route path ='/viewResDetails' component ={resProfile} />
     <Route path={"/updateAdmin/:aid"} render={(props) =>
       <UpdateRes {...props} key={props.match.params.id} />} />
          <Route path="/resHome" component={AdminHome} />
          <Route path ="/viewCustproduct" component= {CustomerProduct} />
          <Route path ='/viewCustDetails' component ={ListCustomer} />
          <Route path={"/updateCustomer/:customerId"} render={(props) =>
       <UpdateCustomer {...props} key={props.match.params.id} />} />
          <Route path="/cusHome" component={CustomerHome} />
          <Route path={"/addOrder/:productid"}  render={(props) =>
       <AddOrder {...props} key={props.match.params.id}  /> }/>
          <Route path={"/viewCustOrder"} component={ListOrder} />
          <Route path={"/updateOrder/:order_id"}  render={(props) =>
       <UpdateOrder {...props} key={props.match.params.id}  />
      }/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Home;
