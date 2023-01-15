import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Divider from '@mui/material/Divider';

function App() {

  const [galleryItems, setGalleryItems] = useState('');

  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('Recieved this data from GET /gallery: ', response.data);
      setGalleryItems(response.data);

    }).catch((error) => {
      console.log('Error in GET /gallery: ', error);
    })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Museum of Modern Mischa</h1>
          <Divider variant="middle" />
        </header>
        
        <GalleryList galleryItems={galleryItems} getGallery={getGallery}/>
      </div>
    );
}

export default App;
