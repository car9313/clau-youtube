import { CheckCircle } from "@mui/icons-material"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const ChannelCard = ({ channelDetail }) => {

    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '350px', md: '320px' },
                height: '330px',
                margin: 'auto'
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: '#fff'
                    }}>
                    <CardMedia
                        component='img'
                        image={channelDetail?.snippet?.thumbnails?.high?.url}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: '50%',
                            height: '180px',
                            width: '180px',
                            mb: 2
                        }}
                    />
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{
                            fontSize: 14,
                            color: 'gray',
                            ml: '5px'
                        }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount &&
                        (
                            <Typography>
                                {parseInt(channelDetail?.statistics?.subscriberCount)
                                    .toLocaleString() + ' '
                                }
                                Subcribers
                            </Typography>
                        )}


                </CardContent>
            </Link>
        </Box>
    )
}
export default ChannelCard