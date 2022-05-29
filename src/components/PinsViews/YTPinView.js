import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import YouTube from '@mui/icons-material/YouTube';
import StarsIcon from '@mui/icons-material/Stars';

export default function YTPinView() {

  return (
   <div className='px-3 pt-3'>
        <Card>
      <CardHeader
      className=''
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            <YouTube/>
          </Avatar>
        }
        action={
            <div>
              <IconButton aria-label="favourite">
                <StarsIcon />
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