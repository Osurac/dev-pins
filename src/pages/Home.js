import React from 'react';
import '../App.css';
import { TitlePage } from '../components/General/TitlePage';
import { Layout } from '../layout';
import Grid from '@mui/material/Grid';
import Item from '../components/General/Item';
import BasicPinView from '../components/PinsViews/BasicPinView';
import PodcastPinView from '../components/PinsViews/PodcastPinView';
import YTPinView from '../components/PinsViews/YTPinView';
import Typography from '@mui/material/Typography';
import DialogCreate from '../components/General/DialogCreate';
const Home = () => (
  <Layout>
    <TitlePage>

      <Grid container spacing={2}>
        <Grid item xs={10}>
           Favoritos  {sessionStorage.login === 'true' ? JSON.parse(sessionStorage.user).username : 'No logueado'} 
        </Grid>
        <Grid item xs={2}>
          <DialogCreate></DialogCreate>
        </Grid>
      </Grid>

    </TitlePage>
    <div className='px-3'>
      <Grid container spacing={2}>
        <Grid item sm={12} md={4} width="100%">
          <Typography variant="subtitle1" gutterBottom component="div" className='pl-2'> Pins </Typography>
          <Item>
            <BasicPinView></BasicPinView>
            <BasicPinView></BasicPinView>
            <BasicPinView></BasicPinView>
            <BasicPinView></BasicPinView>
            <BasicPinView></BasicPinView>
            <BasicPinView></BasicPinView>
            <BasicPinView></BasicPinView>
            <BasicPinView></BasicPinView>
          </Item>
        </Grid>
        <Grid item sm={12} md={4} width="100%">
          <Typography variant="subtitle1" gutterBottom component="div" className='pl-2'> Vídeos </Typography>
          <Item>   <YTPinView></YTPinView>
            <YTPinView></YTPinView>
            <YTPinView></YTPinView>
            <YTPinView></YTPinView>
            <YTPinView></YTPinView>
            <YTPinView></YTPinView>
            <YTPinView></YTPinView>
            <YTPinView></YTPinView>
            <YTPinView></YTPinView>
            <YTPinView></YTPinView>
            <YTPinView></YTPinView>
            <YTPinView></YTPinView>
            <YTPinView></YTPinView></Item>
        </Grid>
        <Grid item sm={12} md={4} width="100%">
          <Typography variant="subtitle1" gutterBottom component="div" className='pl-2'> Podcast </Typography>
          <Item>
            <PodcastPinView></PodcastPinView>
            <PodcastPinView></PodcastPinView>
            <PodcastPinView></PodcastPinView>
            <PodcastPinView></PodcastPinView>
            <PodcastPinView></PodcastPinView>
            <PodcastPinView></PodcastPinView>
            <PodcastPinView></PodcastPinView>
            <PodcastPinView></PodcastPinView>
            <PodcastPinView></PodcastPinView>
            <PodcastPinView></PodcastPinView>
            <PodcastPinView></PodcastPinView>
          </Item>
        </Grid>
      </Grid>
    </div>
  </Layout>
);

export default Home;