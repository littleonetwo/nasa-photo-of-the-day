import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PicOfDay from './components/picture.js';
import "./index.css"


function App() {

  const [picture, setPicture] = useState(' ');
  const [pictureHD, setPictureHD] = useState(' ');
  const [date, setDate] = useState(' ');
  const [desc, setDesc] = useState(' ');
  const [auth, setAuth] = useState(' ');
  const [type, setType] = useState(' ');
  const [title, setTitle] = useState(' ')

  useEffect(() =>{
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        console.log(response);
        setPicture(response.data.url);
        setPictureHD(response.data.hdurl);
        setDate(response.data.date);
        setDesc(response.data.explanation);
        setAuth(response.data.copyright);
        setType(response.data.media_type);
        setTitle(response.data.title);
      })
      .catch(err =>{
        console.log(err);
      })
    }, []);


  return (
    <div className="App">
      <div className="container">
        <div>
          <h1>NASA</h1>
          <h2>Current Pic of the Day</h2>
        </div>
        <PicOfDay
          picture = {picture}
          pictureHD = {pictureHD}
          date = {date}
          desc = {desc}
          auth = {auth}
          type = {type}
          title = {title}
        />


      </div>
    </div>
  );
}

export default App;
