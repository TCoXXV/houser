import React from 'react';
import './House.css';


export default function House(props){
    return(
        <div className='card'>
        <p className='deletespan'><button onClick={props.delete} className='deletebtn'>X</button></p>
            <p className='cardp'>Property Name: {props.house.name}</p>
            <p className='cardp'>Address: {props.house.address}</p>
            <p className='cardp'>City: {props.house.city}</p>
            <p className='cardp'>State: {props.house.state}</p>
            <p className='cardp'>Zip: {props.house.zip}</p>
           
        </div>
    )
}