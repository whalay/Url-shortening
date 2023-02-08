import React, { useState, useEffect } from "react";
import axios from "axios";

import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import UrlForm from "./components/UrlForm";

// const getLocalStorage = () => {
//   let links = localStorage.getItem("links")

//   if (links) {
//     return JSON.parse(localStorage.getItem("links"))
//   } else {
//     return []
//   }
// }

function App() {

  const [inputText, setInputText] = useState("");
  const [link, setLink] = useState([])
  const [buttonText, setButtonText] = useState("Copy")

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

      setLink(prev => [...prev, data.result]);

      console.log(data);
      console.log(link)  

    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(link.full_short_link)
    setButtonText("Copied!")
  }

  useEffect(() => {
    localStorage.setItem("link", JSON.stringify(link))
  }, [link])

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
      <Section link={link} buttonText={buttonText} handleCopy={handleCopy}/>
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
