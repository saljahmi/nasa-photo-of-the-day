import React, {useEffect} from "react";
import {useState} from "react";
import "./App.css";
import axios from 'axios'
import Image from './components/Image/Image.js'

export default function App (props) {
  const [image, setImage] = useState(null)

  useEffect(() => {
    // use axios
    // on success breakpoint
    // on failure breakpoint

    axios.get('https://api.nasa.gov/planetary/apod?api_key=KT5wuG2rgD0xURYm7T7IexjWq3MTMPozchVfbgEm')
      .then(res => {
        console.log(res.data)
        setImage(...res.data)
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        // this runs whether success or failure
      })
  }, []);


  return (
    <div className="App">
      <p>
        NASA Photo of the Day <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Image image = {image} setImage = {setImage}/>
    </div>
  );
}

