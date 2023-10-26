import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';
import { ChannelDetail, Dashboard, Navbar, SearchDashboard, VideoDetail } from './components';

function App() {


  return (
    <BrowserRouter>
      <Box sx={{ background: '#000' }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchDashboard />} />

        </Routes>
      </Box>

    </BrowserRouter>
  )
}

export default App
