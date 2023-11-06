import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getVideos } from '../utils/getVideos'
import { Box } from '@mui/material'
import { ChannelCard, Videos } from './'
const ChannelDetail = () => {
    const { id } = useParams()
    const [channelDatail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideos(`channels?part=snippet&id=${id}`)
            .then(data => {
                setChannelDetail(data?.items[0])
            })

        getVideos(`search?channelId=${id}&part=snippet&order=date`)
            .then(data => setVideos(data?.items))


    }, [id])
    return (
        <Box minHeight='95vh'>
            <Box sx={{ borderBottom: '1px solid white', marginBottom: '10px' }}>
                <ChannelCard channelDetail={channelDatail}></ChannelCard>
            </Box>

            <Box p={2} sx={{
                overflow: 'auto',
                height: '90vh',
                flex: 2,
            }}>
                <Videos videos={videos}></Videos>
            </Box>
        </Box>
    )
}
export default ChannelDetail