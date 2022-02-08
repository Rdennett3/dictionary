import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [ word, setWord] = useState("");
  const [ meanings, setMeanings ] = useState([]);
  const [ category, setCategory ] = useState("en");

    const dictionaryApi = async() => {
      try {
        const data = await axios.get(' https://api.dictionaryapi.dev/api/v2/entries/en/house');
        console.log(data);
        setMeanings(data.data);
      } catch (error) {
        
      }
    };
    
    console.log(meanings);

    useEffect(() => {
      dictionaryApi();
    }, [])
    
    return <div className="App" style={{height:'100vh', backgroundColor:'#39393A', color:'#63B0CD'}}>
      <Container maxWidth="md" style={{display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center", height:'100vh'}}>
        <Header category={category} setCategory={setCategory} />
      </Container>
    </div>
}

export default App;
