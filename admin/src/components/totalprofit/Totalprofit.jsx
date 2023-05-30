import React from "react";

export default function Totalprofit(){
   const serializedArray = localStorage.getItem('graphDetails');
   const myArray = JSON.parse(serializedArray);
console.log(myArray[0].plan)

   return (
      <div>

      </div>
      )
}