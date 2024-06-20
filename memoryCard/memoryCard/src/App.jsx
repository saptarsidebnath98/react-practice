import { useState, useEffect } from 'react';

function App() {
  const [record, setRecord] = useState([]);

    const fetchPokemon = async () => {
      try{
        const response = await fetch('api.giphy.com/v1/gifs/trending/Y8BW16wpdORrS8lvU9DiQqvBxlpVqHcr');
        const data = await response.json();
        setRecord(data.results);
        console.log(data.results);
      }catch(error){
        console.error('Error fetching Pokemon:', error);
      }
    }
   
    useEffect(()=> {
        fetchPokemon();
    }, [])


  return (
    <>
      {record.map((item) => {
        return(
          <>{item}</>
        )
      })}
    </>
  )
}

export default App
