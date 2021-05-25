import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import {Link} from 'react-router-dom'

export default function PaymentForm() {

 const [number, setNumber] = useState('')
  const[name, setName] = useState('')
  const[expiry, setExpiry] = useState('')
  const[cvc, setCvc] = useState('')
  const[focus, setFocuss] = useState('')

    function handleClick(e) {
      e.preventDefault();
      alert("Order Confirmed!!");
    }

    return (
      <div id="PaymentForm">
    <Cards
      number = {number}
      name = {name}
      expiry = {expiry}
      cvc = {cvc}
      focused = {focus}
      />


     <form>

       <input type='text' 
       name='number' 
       placeholder='Card Number' 
       value ={number} 
       onChange={e => setNumber(e.target.value)}
       onFocus = {e => setFocuss(e.target.name)}/>

        <input type='text' 
       name='name' 
       placeholder='Name' 
       value ={name} 
       onChange={e => setName(e.target.value)}
       onFocus = {e => setFocuss(e.target.name)}/>

      <input type='text' 
       name='expiry' 
       placeholder='MM/YY Expiry' 
       value ={expiry} 
       onChange={e => setExpiry(e.target.value)}
       onFocus = {e => setFocuss(e.target.name)}/>

      <input type='text' 
       name='cvc' 
       placeholder='CVC' 
       value ={cvc} 
       onChange={e => setCvc(e.target.value)}
       onFocus = {e => setFocuss(e.target.name)}
       />
      <br></br>
      <input type="text" placeholder="Enter order No:"></input>
       <button onClick={handleClick} >Confirm Payment</button>

       

     </form>
    <br></br>
    <Link to="/cusHome">Go Back to Customer Home Page</Link>
    <br></br>
    <Link to ="/viewCustMenu">Go Back to Product Page</Link>
    <br></br>
      </div>
    );
  }
