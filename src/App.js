import axios from 'axios';
import './App.css';
import {useState} from 'react';

function App() {
  const [country,setCountry] = useState("")
  const [city,setCity] = useState("")

const search = () =>{
  axios({

    url:'https://api.geoapify.com/v1/geocode/search?REQUEST_PARAMS',
 
    params: {
      apiKey: '54126e5ad21e4bcd8fe3defb8fbbb57f',
      city: city,
      country:country,
    }
  }).then((res)=>{
    console.log("Longitude", res.data.features[0].properties.lon);
    console.log("Latitude", res.data.features[0].properties.lat);
    console.log("Latitude", res.data);
  })
}
const getCity =(e)=>{
  setCity(e.target.value)
}

const getCountry =(e)=>{
  setCountry(e.target.value)
}

const getLocation = (e) =>{
  e.preventDefault();
  search();
}

  return (
   
    <div className="App">
      <form onSubmit={getLocation}>
        <div className= "form">
        <input onChange = {getCity} value={city}/>
        <input onChange = {getCountry} value={country}/>
        </div>
        <button>Click me</button>
      </form>


   
  
    </div>
  );
}

export default App;
