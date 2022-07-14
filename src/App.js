import axios from 'axios';
import './App.css';

function App() {
  axios({
    url: 'http://api.positionstack.com/v1/forward',
    params: {
      access_key: '57c7fafe4d4cd9ab9aaf1450c00060fa',
      query: 'Toronto',
    }
  }).then((res)=>{
    console.log(res.data);
  })
  return (
   
    <div className="App">
  

   
  
    </div>
  );
}

export default App;
