import React, { Component } from 'react'
import './Restaurant.css' 

function Restaurant(props) {
    return (
        <>
        <h2 className="res">{props.loc.state.restaurant.name}</h2>
        <h2 className="res">Rating: 4</h2>
        <img src="https://glassking.com/wp-content/uploads/2017/05/store-832188_1280.jpg" height="400px"/>
        <h2>Covid Friendly Rating: 4/5</h2>
        <h2>Masks: 4/5</h2>
        <h2>Sanitation: 4/5</h2>
        <h2>Social Distance: 4/5</h2>

        </>
    )
}

export default Restaurant