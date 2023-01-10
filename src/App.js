import React from 'react'
import { Box } from '@mui/material'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import Navbar from './components/Navbar'
// import Feed from './components/Feed'
// import VideoDetail from './components/VideoDetail'
// import ChannelDetail from './components/ChannelDetail'
// import SearchFeed from './components/SearchFeed'
// Para evitar tener cinco líneas importando 5 componentes creamos el index.js en la carpeta componentes
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from '../src/components'

const App = () => (
  <BrowserRouter>
  <Box sx={{backgroundColor: '#000'}}>
  <Navbar />
  <Routes>
    <Route path="/" exact element={<Feed />} />
    <Route path="/video/:id" exact element={<VideoDetail />} />
    <Route path="/channel/:id" exact element={<ChannelDetail />} />
    <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
  </Routes>
  </Box>
  </BrowserRouter>
)

export default App