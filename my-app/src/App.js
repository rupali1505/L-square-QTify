import React,{ useEffect, useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';import './App.css';
import Navbar from './components/Navbar/Navbar';

import { Outlet } from 'react-router-dom';
import{
  fetchFilters,
  fetchNewAlbums,
  fetchTopSongs,
  fetchTopAlbums,
}  from "./api/api.js";

function App() {
  const [data, setData] = useState({});

  const generateData = (key, source)=>{
    source().then((data)=>{
      setData((prevState)=>{
        return { ...prevState, [key]: data };
      })
    })
  }

  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchTopSongs);
    generateData("genres", fetchFilters);
  },[]);

  const { topAlbums = [], newAlbums = [], songs = [], genres = [] } = data;

  return (
   <>
   <StyledEngineProvider injectFirst>
   <Navbar searchData = {[...topAlbums, ...newAlbums]} />
   <Outlet context = {{ data:{topAlbums, newAlbums, songs, genres}}} />
   </StyledEngineProvider>
   </>
  );
}

export default App;
