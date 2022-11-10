import React, { useState, useEffect } from "react";
import axios from "axios";

import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import UrlForm from "./components/UrlForm";

const API_ENDPOINT = "https://api.shrtco.de/v2/shorten?url=";

function App() {

  const [inputText, setInputText] = useState("");
  // const [url, setUrl] = useState("");
  const [link, setLink] = useState([]);

  const array = [];
  
  const [inputIsValid, setInputIsValid] = useState(true);

  const url = `https://api.shrtco.de/v2/shorten?url=${inputText}`;


  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const getData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
     

      // const array = array.push(data);
      // const array = [...data];
      // const nArray = nArray.push(data); 
      setLink(prev => [...prev, data.result]);

      // const array = array.push[...data]
      console.log(data);
      console.log(link)  
      // console.log(array);

      // console.log(nArray);


      
    } catch (err) {
      setError(err.message);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  

    if (inputText.trim() != "") {
      setInputIsValid(true);
    } else {
      setInputIsValid(false);
      return;
    }
   
    console.log('OK I AM WORKING');
    getData();

    setInputText("");
  
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <UrlForm inputText={inputText} submitHandler={submitHandler} inputHandler={inputHandler} inputIsValid={inputIsValid}/>
      <Section link={link} inputText={inputText}/>
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
