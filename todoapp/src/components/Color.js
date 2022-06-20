import { Component, usecolor, useState } from "react";

function Color(){
   const [car,setCar] = useState({
        brand:"Ford",
        color:"red",
        year:"1978",
        model:"Mustang"
   })

   const updateColor=()=>{
    setCar(previousState=>{
        return{...previousState,color:"blue"}
    })

   }

        return(
            <div>
                <h1>my car is {car.brand} {car.color} {car.year}</h1>
                <button
                    type="button"
                    onClick={updateColor}
                >
                    blue
                </button>
            </div>
        )
    
}



export default Color;