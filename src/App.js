import axios from 'axios';
import './App.css';

function App() {
  axios({

    url:'https://api.geoapify.com/v1/geocode/search?REQUEST_PARAMS',
 
    params: {
      apiKey: '54126e5ad21e4bcd8fe3defb8fbbb57f',
      city: 'Toronto',
    }
  }).then((res)=>{
    console.log(res.data.features[0].properties.lon);
    console.log(res.data.features[0].properties.lat);
  })
  return (
   
    <div className="App">
  

   
  
    </div>
  );
}

export default App;
