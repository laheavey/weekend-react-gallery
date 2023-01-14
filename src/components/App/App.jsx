import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

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
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryItems={galleryItems}/>
      </div>
    );
}

export default App;
