import { useHistory } from 'react-router-dom';


function PaymentHome(){
    const history = useHistory();
    const codHandler = () => history.push('/cod');
    const creditCardHandler = () => history.push('/creditCard');

  return (
    <div className="container">
      <img src={require("./../Images/background1.jpg")} alt="somepicture" />
      <div className='card' style={{marginTop:"200px", border:'1px solid transparent' }} >
    <div className="card-row">
      <div className='card-body text-center'>
        <button type="button" class="btn btn-outline-dark card-text" onClick={codHandler}>CASH ON DELIVERY</button>
      </div>
      <div className="card-body">
        <button type="button" class="btn btn-outline-dark" onClick={creditCardHandler}>CARD PAYMENT</button>
      </div>
    </div>
    </div>
    </div>
  );
    
}

export default PaymentHome;