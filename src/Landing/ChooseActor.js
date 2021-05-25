import "./../App.css";

import React  from 'react'

import { useHistory } from 'react-router-dom';


function ChooseActor(){
    const history = useHistory();
    const AdminHandler = () => history.push('/admin');
    const customerHandler = () => history.push('/customer');

  return (
    <div className="container">
      <img src={require("./../Images/background1.jpg")} alt="somepicture" />
      <div className='card' style={{marginTop:"200px", border:'1px solid transparent' }} >
    <div className="card-row">
      <div className='card-body text-center'>
        <button type="button" class="btn btn-outline-dark card-text" onClick={AdminHandler}>Admin</button>
      </div>
      <div className="card-body">
        <button type="button" class="btn btn-outline-dark" onClick={customerHandler}>Customer</button>
      </div>
    </div>
    </div>
    </div>
  );
    
}

export default ChooseActor;
