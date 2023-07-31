import { useState, useEffect} from 'react'
import axios from 'axios';



import Button from './assets/components/button'
function App() {
  const [quote, setQuote] = useState(null);
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const [color, setColor] = useState('');
  //"https://type.fit/api/quotes"
 
    const getQuotes = async() =>{
      try{
       await axios.get("https://type.fit/api/quotes")
          .then(res => {
            console.log(res.data);
          setQuote(res.data)
          setText(res.data[Math.floor(Math.random()*res.data.length)].text)
          setAuthor(res.data[Math.floor(Math.random()*res.data.length)].author)
          })
        
      }catch(err){
        console.log(err.message);
      }
    }
    const handleClick =  async() =>{
      try{
        setText(quote[Math.floor(Math.random()*quote.length)].text)
        setAuthor(quote[Math.floor(Math.random()*quote.length)].author)
        randomRgbaColor();
        
      }catch(err){
        console.log(err.message);
      }
    }
    const randomRgbaColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const a = Math.random(); // 0.0 - 1.0
      setColor( `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`);
    };
    useEffect(()=>{
      getQuotes();
      
      randomRgbaColor();
      handleClick();
      
    },[])


      
   


  return (
    
    <>
     {quote &&
    <>
    <div className="w-100 h-100 flex  justify-center items-center " style={{backgroundColor: color}} id='cover'>
      <div className='pt-8 pb-6 pl-4 pr-4 w-70 bg-white text-center rounded-md' id='quote-box'>
      <blockquote className='text-2xl' id="text"style={{color:color}}>{text}</blockquote>
      
      <address className='text-lg mb-4' id='author' style={{color:color}}>{author}</address>
      <Button id="new-quote" buttonColor={color} buttonText={"Next Quote"} buttonFunction={handleClick}></Button>
      </div>
      
    </div>
    </>
    }
      
    </>
  )
}

export default App
