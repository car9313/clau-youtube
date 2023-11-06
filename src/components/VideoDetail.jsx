import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getVideos } from "../utils/getVideos";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data?.items[0])
    );
    getVideos(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  if (!videoDetail?.snippet) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "85px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="60vh"
              width="100%"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              color="#fff"
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant="subtitle1" color="#fff">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" alignItems="center" gap="20px">
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent="center"
        alignItems={"center"}
      >
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};
export default VideoDetail;
