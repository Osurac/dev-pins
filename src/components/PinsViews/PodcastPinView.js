import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { yellow } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import StarsIcon from '@mui/icons-material/Stars';

export default function BasicPinView() {

  return (
   <div className='px-3 pt-3'>
        <Card>
      <CardHeader
      className=''
        avatar={
          <Avatar sx={{ bgcolor: yellow[500] }}>
            <PodcastsIcon/>
          </Avatar>
        }
        action={
          <div>
            <IconButton aria-label="favourite">
              <StarsIcon color='success' />
            </IconButton>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </div>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    </Card>
   </div>
  );
}