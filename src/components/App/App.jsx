import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react'; 
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Divider from '@mui/material/Divider';

function App() {
  // Pieces of state for images to be displayed in the gallery.
  const [galleryItems, setGalleryItems] = useState('');

  // Runs getGallery on page load.
  useEffect(() => {
    getGallery();
  }, []);

  // GET route for gallery images.
  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      // console.log('Recieved from GET /gallery: ', response.data);
      setGalleryItems(response.data);

    }).catch((error) => {
      console.log('Error in GET /gallery: ', error);
    })
  }
  // END GET route.

  // Mischa is my cat's name. Probably obvious, but all the same.
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
