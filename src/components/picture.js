import React, { useState, useEffect } from "react";



const PicOfDay = (props) => {

  return(
    <div className = 'inner-container'>
      <div className= "date">
        <h4>Date: {props.date}</h4>
      </div>

      <div className= "author-stuff">
        <h2> {props.title} </h2>
        <p />
        <h4> By: {props.auth} </h4>
      </div>

      <div className= "img-container">
        <img src= {props.picture} alt= {props.title} />
        <br />
        <a href= {props.pictureHD}>HD Version</a>
      </div>

      <div className= "description">
        <p> {props.desc}</p>
      </div>



    </div>

  )

}
export default PicOfDay;
