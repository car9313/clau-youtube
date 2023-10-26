import { Box, Stack } from "@mui/material"
import { VideoCard, ChannelCard } from "./"


const Videos = ({ videos }) => {
    return (
        <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent='start'
            gap={2}
        >
            {videos.map((item, index) => {
                const key = item.id.videoId ? item.id.videoId : item.id.channelId
                return (
                    <Box key={key}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                    </Box>
                )
            })}

        </Stack>
    )
}
export default Videos