import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import GifDisplay from './components/GifDisplay';

function App() {
  const [gif, setGif] = useState(null);
  const API_KEY ='K57CGoLxPO6XnKUU3KcDKRmIgYaWU6dS';

  const getGif= async (serachTerm) =>{
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${serachTerm}&api_key=${API_KEY}`
    )
    const data = await response.json();
    const displayData = data.data[0].images.downsized_large.url
    //console.log(data.data[0].images.downsized_large.url)
    setGif(displayData)
  }
  
  useEffect(() => {
    getGif('school')
  }, [])
  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form gifSearch = {getGif} />
      <br>
      </br>
      <GifDisplay gif = {gif} />
    </div>
  );
}

export default App;
