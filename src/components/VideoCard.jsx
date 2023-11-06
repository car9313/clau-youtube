import { CheckCircle } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <Card sx={{ width: '100%', borderRadius: 0 }}>
            <Link to={`/video/${videoId}`}>
                <CardMedia
                    component='img'
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: '100%', height: 180, objectFit: 'cover' }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '110px' }}>
                <Link to={`/video/${videoId}`}>
                    <Typography variant="subtitle1"
                        fontWeight='bold' color='#fff'>
                        {snippet?.title.slice(0, 50)}
                    </Typography>
                </Link>
                <Link to={`/channel/${snippet?.channelId}`}>
                    <Typography variant="subtitle2"
                        fontWeight='bold' color='gray'>
                        {snippet?.channelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}
export default VideoCard