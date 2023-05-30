import React from "react";
import "./totalprofit.css"
export default function Totalprofit(){
   const serializedArray = localStorage.getItem('graphDetails');
   const myArray = JSON.parse(serializedArray);
   const allplans = myArray
   .filter(plans => plans.subscription === true)
   .map(plans => parseInt(plans.plan));
const totalAmount = allplans.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalAmount);
   return (
      <div>
      <div className="container3">
      <div className="box left-box">Monthy Revenue:   
      <h2>{totalAmount}</h2>
      </div>
      <div className="box right-box">Total Profit:
      <h2>{totalAmount}</h2>
      </div>
    </div>
      </div>
      )
}