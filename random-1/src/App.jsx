import { useState, useEffect} from 'react'

import './App.css'
import Button from './assets/components/button'
function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('')
  const [colorx, setColorx] = useState('')
  const  fetchQuote = () =>{
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then((res) =>{
      let randomNo = Math.floor(Math.random()*res.length);
      setQuote(res[randomNo].text )
      setAuthor(res[randomNo].author)})  
  }
  const randColor = () =>  {
    setColorx("#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()) ;
}
function changeBackground() {
  document.body.style.background = colorx;
}
    useEffect(()=>{
      fetchQuote();
   
      randColor();
      
    },[])

      const handleClick = ()=>{
        fetchQuote();
        randColor();
        changeBackground();      
      }

      
   


  return (
    
    <>
      <div style={{backgroundColor: "whitesmoke", borderRadius:"1rem",padding:"1rem"}} id="quote-box">
        <blockquote >
        <q id="text">{quote}</q><br />
        <address id="author">{author}</address>
        <div className="functions"> 
        <a style={{backgroundColor:colorx,color:"whitesmoke"}} id="tweet-quote" href="http://twitter.com/intent/tweet"><i id='tweet' className="fab fa-twitter"></i></a>        
        <Button buttonColor={colorx} buttonFunction={handleClick} buttonText="NextQuote" /></div>
        </blockquote>
        
       
      </div>
      
    </>
  )
}

export default App
