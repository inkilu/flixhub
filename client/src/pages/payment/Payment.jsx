import React, { useState } from 'react';
import './payment.css'
import axios from 'axios';
import { useHistory} from 'react-router-dom';
const PaymentForm = () => {
  const history = useHistory();
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [plan,setPlan] = useState('');

  const [clickedIndex, setClickedIndex] = useState(null);
const userId = JSON.parse(localStorage.getItem("user"))._id;
const storedObject = JSON.parse(localStorage.getItem('user'));

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleDivClick = (value,index) => {
    setPlan(value);
    setClickedIndex(index);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/users/${userId}`, {
      "subscription":true,
      "plan":plan
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
    storedObject.subscription = true;
    storedObject.plan = plan;
    localStorage.setItem('user', JSON.stringify(storedObject));
    history.push('/Paymentpending');
  };

  return (
    <div className="payment-form">
    <h2>Choose a Plan and Pay!</h2>
    <div className="plans-container">
      <div className={`plan ${clickedIndex === 0 ? 'clicked' : ''}`} onClick={()=>{handleDivClick('50',0)}}>
        <h2>₹50</h2>
        <p className='centertext'>• Access to every media </p>
        {/* Other plan details */}
      </div>
      <div className={`plan ${clickedIndex === 1 ? 'clicked' : ''}`} onClick={()=>{handleDivClick('120',1)}}>
        <h2>₹120</h2>
        <p className='centertext'>• Access to every media</p>
        <p className='centertext'>• Fast Request Checking</p>
        {/* Other plan details */}
      </div>
      <div className={`plan ${clickedIndex === 2 ? 'clicked' : ''}`} onClick={()=>{handleDivClick('210',2)}}>
        <h2>₹210</h2>
        <p className='centertext'>• Access to every media</p>
        <p className='centertext'>• Fast Request Checking</p>
        <p className='centertext'>• Early Access to New Features</p>
        {/* Other plan details */}
      </div>
    </div>
      <form onSubmit={updateUser}>
        <div className="form-group">
          <h3>Card details</h3>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            pattern="\d*"
            maxLength="16"
            placeholder='16 Digit Card Number'
            value={cardNumber}
            onChange={handleCardNumberChange}
            autocomplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={handleExpirationDateChange}
            maxLength="5"
            placeholder="MM/YY"
            pattern="^(0[1-9]|1[0-2])\/(2[3-9]|[3-9][0-9])$"
            autocomplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="password"
            id="cvv"
            pattern="\d*"
            maxLength="3"
            value={cvv}
            onChange={handleCVVChange}
            placeholder='***'
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
