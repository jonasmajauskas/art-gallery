import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import ButtonBar from './ButtonBar'
import Gallery from './Gallery'

function App() {
  let [artId, setArtId] = useState(12750)
  let [data, setData] = useState({})
  useEffect(() => {
    document.title ='Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }
  return (
    <div className="App">
      ART GALLERY
      <Gallery
      objectImg={data.primaryImage}
      title={data.title}
      artist={data.artistDisplayName}
      />
      <ButtonBar/>
    </div>
  );
}

export default App;
