import { Box, Stack, Typography } from '@mui/material'
import { Siderbar, Videos } from '../components'
import { useEffect, useState } from 'react'
import { getVideos } from '../utils/getVideos'

const Dashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])
    useEffect(
        () => {
            getVideos(`search?part=snippet&q=${selectedCategory}`)
                .then(data => setVideos(data.items))
        },
        [selectedCategory]
    )
    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
            <Box sx={{
                height: {
                    sx: 'auto',
                    md: '100vh'
                },
                borderRight: '1px solid #3d3d3d',
                px: { sx: 0, md: 2 },
            }}>
                < Siderbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography className='copyright'
                    variant="body2"
                    sx={{
                        mt: 1.5,
                        color: '#fff'
                    }}
                >
                    Copyright 2023 Clau
                </Typography>
            </Box>
            <Box p={2} sx={{
                overflow: 'auto',
                height: '90vh',
                flex: 2,
            }}>
                <Typography variant='h4' mb={2} sx={{ color: '#fff' }}>
                    New
                    <span style={{ color: '#FC1503', marginLeft: '10px' }}>{selectedCategory}</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack >
    )
}
export default Dashboard