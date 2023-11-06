import { Box, Stack, Typography } from '@mui/material'
import { Siderbar, Videos } from '../components'
import { useEffect, useState } from 'react'
import { getVideos } from '../utils/getVideos'
import { useParams } from 'react-router-dom'

const SearchDashboard = () => {
    const [videos, setVideos] = useState([])
    const { searchTerm } = useParams()
    useEffect(
        () => {
            getVideos(`search?part=snippet&q=${searchTerm}`)
                .then(data => setVideos(data.items))
        },
        []
    )
    return (
        <Box p={2} sx={{
            overflow: 'auto',
            height: '90vh',

        }}>
            <Typography variant='h4' mb={2} sx={{ color: '#fff' }}>
                Search Results for:
                <span style={{ color: '#FC1503', marginLeft: '10px' }}>{searchTerm} videos</span>
            </Typography>
            <Videos videos={videos} />
        </Box>
    )
}
export default SearchDashboard