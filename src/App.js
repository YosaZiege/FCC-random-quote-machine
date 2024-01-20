import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FaQuoteLeft, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Row, Col, Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import quotes from "./quotes.json"

document.body.style.transition = "background 1s";
const getRandomQuote = () => {
   return  quotes[Math.floor(Math.random() * quotes.length)]
    
};
function getRandomGradient() {
  const getRandomValue = () => Math.floor(Math.random() * 256);

  const color1 = `rgba(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()}, 1)`;
  const color2 = `rgba(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()}, 1)`;
  const color3 = `rgba(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()}, 1)`;

  return `linear-gradient(90deg, ${color1} 0%, ${color2} 50%, ${color3} 86%)`;
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function App() {

  const [quote, setQuote] = useState(getRandomQuote());
  const [randomColor, setRandomColor] = useState(getRandomColor());
  const handleNewQuote = () => {
    document.body.style.transition = "all 1s ease-in-out";
    document.body.style.background = getRandomGradient();
    
    const newQuote = getRandomQuote;
    setQuote(newQuote);
    setRandomColor(getRandomColor());
    
  };
  return (
    <Container  className="vh-100 d-flex align-items-center justify-content-center">
      <div id="quote-box" className="p-4 border rounded" style={{position: 'fixed'}}>
        <Row id="quote">
          <Col xs={12}>
              <FaQuoteLeft className="leftQuote" style={{ fontSize: "2rem",  transition:" all 1s", color: randomColor }} />
              <span style={{ fontSize: "2em" , color: randomColor, transition:" all 1s"  }}>{quote.quote}</span>
          </Col>
        </Row>
        <Row id="author">
          <Col xs={7}  className='author'  >
            <p style={{color: randomColor, transition:" all 1s"}}><i>- {quote.author}</i></p>
          </Col>
        </Row>
        <Row className="buttons" style={{marginTop: "2rem",bottom: 0,}}>
          <Col xs={1}>
            <a  href = "https://twitter.com/?lang=fr" id="tweet-quote" className='w-100'><BsTwitterX style={{ color: randomColor, fontSize: "2.5rem" , transition:" all 1s"}}/></a>
          </Col>
          <Col xs={1}>
            <a  href ="https://www.instagram.com/" id="instagram-quote" className='w-100'><FaInstagram style={{ color: randomColor, fontSize: "2.5rem" , transition:" all 1s"}}/></a>
          </Col>
          <Col xs={8} >
            <Button id="new-quote"  style={{backgroundColor: randomColor,  transition:" all 1s", borderColor: randomColor}} onClick={handleNewQuote}>
              New Quote
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
    
  );
}

export default App;
 