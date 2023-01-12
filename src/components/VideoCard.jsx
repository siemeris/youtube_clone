import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'


const VideoCard = ({
  video
}) => {
  console.log(video)
  return (
    <Card>
      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
        <CardMedia image={video.snippet?.thumbnails?.high?.url} alt={video.snippet?.title} sx={{ width: 358, height: 180 }} />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {/* Acortamos títulos demasiado grandes */}
            {video.snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link to={video.snippet?.channelId ? `/channel/${video.snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {/* Acortamos títulos demasiado grandes */}
            {video.snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
            <CheckCircle sx={{fontSize:12, color:"gray", ml:"5px"}} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard