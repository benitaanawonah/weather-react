import React from "react";
import axios from "axios";
import {ThreeDots} from "react-loader-spinner";

export default function Weather(props) {
   function handleResponse(response) {
       alert(`The weather in ${response.data.name} is ${response.data.main.temp}C`)
   }
   
   let apiKey = "0f8c88146a435b8db9d6af1cacbbc02a";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
   
   
   
   
    return (
        <ThreeDots
        
        color="purple"
        width={100}
    
        />
    )
}