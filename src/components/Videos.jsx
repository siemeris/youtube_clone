import { Box, Stack } from '@mui/material'
import React from 'react'

import {VideoCard, ChannelCard} from './index'

const Videos = ({videos}) => {
    console.log(videos)
  return (
    <Stack direction="row" flexWrap="wrap" justify-content="start" gap={2}>
        {videos.map((item, idx)=>(
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
        ))}

    </Stack>
  )
}

export default Videos