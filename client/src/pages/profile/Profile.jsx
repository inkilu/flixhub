import React from 'react';
import './profile.css'; // Assuming you have a separate CSS file for styling
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const Profile = () => {
    const storedObject = JSON.parse(localStorage.getItem('user'));
    const username = JSON.parse(localStorage.getItem("user")).username;
    const subscription = JSON.parse(localStorage.getItem("user")).subscription;
    const email = JSON.parse(localStorage.getItem("user")).email;
    const paymentdate = JSON.parse(localStorage.getItem("user")).updatedAt;
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    const myplan = JSON.parse(localStorage.getItem("user")).plan;
    const history = useHistory();
    function redirectPayment(){
        history.push('/Payment');
        }
        const updateUser = async (e) => {
            e.preventDefault();
            try {
              const res = await axios.put(`/users/${userId}`, {
              "subscription":false
              });
              console.log(res.data);
            } catch (err) {
              console.error(err);
            }
            storedObject.subscription = false;
            localStorage.setItem('user', JSON.stringify(storedObject));
            history.push('/Paymentpending');
          };
  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          alt=""
          className="profile-picture"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
        <h1 className="username">{username}</h1>
      </div>
      <div className="profile-details">
        <div className="detail-box">
          <h3 >Details</h3>
          <p>Email: {email}</p>
          <p>Subscription :{subscription?"Subscribed":"Not Subscribed"}</p>
          { subscription && <p>Subscription Date: {paymentdate} </p>}
          { subscription && <p>Subscription Plan: <b>₹{myplan}</b></p>}
        </div>
      </div>
      <div className="profile-actions">
       {subscription && <button className="cancel-payment-btn" onClick={updateUser}>Cancel Payment</button> }
        <button className="change-plan-btn" onClick={redirectPayment}>Change Plans</button>
      </div>
    </div>
  );
};

export default Profile;
