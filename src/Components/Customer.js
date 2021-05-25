import React from 'react';
import { useHistory } from 'react-router-dom';

function Customer() {
  const history = useHistory();
  const cusLoginHandler = () => history.push('/cusLogin');
  const cusSignupHandler = () => history.push('/cusSignup');
  const backHandler = () =>history.push('/chooseActor');
  
        return ( 
            <div>
            <h1>Customer</h1>

    <div className='container' >
    <div className='card' style={{marginTop:"150px", border:'1px solid transparent' }} >
    <div className="card-row">
      <div className='card-body text-center'>
        <button type="button" className="btn btn-outline-dark"  onClick={cusLoginHandler}>LOG IN</button>
      </div>
      <div className="card-body text-center">
        <button type="button" className="btn btn-outline-dark" onClick={cusSignupHandler}>SIGN UP</button>
      </div>
      <div className="card-body text-center">
        <button type="button" className="btn btn-outline-dark" onClick={backHandler}>GO BACK</button>
      </div>
      </div>
    </div>
    </div>
    </div>
         );
    }

 
export default Customer;