import "./App.css";
import React, { useState } from "react";
import Social from "./Social";
const App = () => {
  const url = "https://api.quotable.io/random";

  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);
  const [isLoading, setIsLoading] = useState(false);
  const Socials = [
    {
      url: `https://api.whatsapp.com/send?text=${quote.content}`,
      img: "assets/whatsapp.svg",
    },
    {
      url: `https://twitter.com/intent/tweet?text=${quote.content}`,
      img: "assets/twitter.svg",
    },
  ];
  const rederSocial = Socials.map((social) => (
    <Social key={social.url} url={social.url} img={social.img} />
  ));

  const generateQuote = () => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
    setIsLoading(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>
            {isLoading ? "Loading..." : "Generate Another Quote"}
          </button>
        </div>
        <div className="socials">{rederSocial}</div>
      </div>
    </>
  );
};

export default App;
