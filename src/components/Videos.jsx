import { Box, Stack } from "@mui/material"
import { VideoCard, ChannelCard } from "./"


const Videos = ({ videos }) => {
    const videosFilter = videos.filter(item => {
        if (item.id.videoId || item.id.channelId) {
            return item
        }
    })
    return (
        <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent='start'
            margin='0 auto'
            gap={2}
        >

            {videosFilter.map((item, index) => {
                const key = item.id.videoId ? item.id.videoId : item.id.channelId
                return (
                    <Box key={key} sx={{ width: { md: '320px', xs: '100%' } }}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                    </Box>
                )
            })}

        </Stack>
    )
}
export default Videos