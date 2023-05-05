import "./feedbacks.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // REMOVE THESE IMPORTS TO FIX BOOTSTRAP ERROR
import {FeedbacksContext} from '../../feebacksContext/FeedbacksContext'
import React, { useState, useContext } from 'react';
import { createFeedbacks } from "../../feebacksContext/apiCalls";
export default function Feedbacks (){
  const { dispatch } = useContext(FeedbacksContext);
    const [feedbacks, setFeedbacks] = useState(null);
    const handleChange = (e) => {
      const value = e.target.value;
      setFeedbacks({ ...feedbacks, [e.target.name]: value });
      console.log(feedbacks);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      createFeedbacks(feedbacks,dispatch);
    }
  
    return (
<div className="centered-container bg-light">
<div className="container shadow-lg p-3 mb-5 bg-light rounded ">
      <h1>Submit a Movie / Series Request</h1>
      <form className="shadow p-3 mb-5 bg-white rounded shadow-lg" onSubmit={handleSubmit}>
      <label htmlFor="title">Logged in as: </label>
      <input type="text" className="form-control" id="userid"  autocomplete="off" value={JSON.parse(localStorage.getItem("user")).username} readOnly/>
        <div className="form-group mb-4">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" className="form-control" id="title" placeholder="Enter title" autocomplete="off"  onChange={handleChange}/>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="genre">Genre</label>
          <input type="text" name="genre" className="form-control" id="genre" placeholder="Enter genre" autocomplete="off" onChange={handleChange}/>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="year">Year</label>
          <input type="number" name="year" className="form-control" id="year" placeholder="Enter year" autocomplete="off" onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit Request</button>
      </form>
    </div>
</div>
)
}