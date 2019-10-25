import React, { useState, useEffect } from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';


const PicOfDay = (props) => {

  return(
    <div>
      <Card>
        <CardImg top width="100%" src={props.picture} alt= {props.title} />

        <CardBody>
          <CardSubtitle>By: {props.date}</CardSubtitle>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>By: {props.auth}</CardSubtitle>
          <CardText>{props.desc}</CardText>
          <Button href={props.pictureHD}>HD Version</Button>
        </CardBody>
      </Card>
    </div>

    // <div className = 'inner-container'>
    //   <div className= "date">
    //     <h4>Date: {props.date}</h4>
    //   </div>
    //
    //   <div className= "author-stuff">
    //     <h2> {props.title} </h2>
    //     <p />
    //     <h4> By: {props.auth} </h4>
    //   </div>
    //
    //   <div className= "img-container">
    //     <img src= {props.picture} alt= {props.title} />
    //     <br />
    //     <a href= {props.pictureHD}>HD Version</a>
    //   </div>
    //
    //   <div className= "description">
    //     <p> {props.desc}</p>
    //   </div>
    //
    //
    //
    // </div>
  )

}
export default PicOfDay;
