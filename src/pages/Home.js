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
import PinsController from '../controllers/PinsController';
import PodPinsController from '../controllers/PodPinsController';
import YTpinsController from '../controllers/YTPinsController';

let pinsyt = [];
let pins = [];
let pinspod =  [];
let pc = new YTpinsController();
let pcp = new PinsController();
let pco = new PodPinsController();

if(sessionStorage.login){
 updatePins();
}

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
            {pins.map((pin, i) => {
              return (<BasicPinView key={i} url={pin.url} fav={pin.fav} pin_id={pin.ID} />)
            })}
          </Item>
        </Grid>
        <Grid item sm={12} md={4} width="100%">
          <Typography variant="subtitle1" gutterBottom component="div" className='pl-2'> Vídeos </Typography>
          <Item>   
            {pinsyt.map((pin, i) => {
              return (<YTPinView  key={i} url={pin.url} fav={pin.fav} pin_id={pin.ID} />)
            })}
          </Item>
        </Grid>
        <Grid item sm={12} md={4} width="100%">
          <Typography variant="subtitle1" gutterBottom component="div" className='pl-2'> Podcast </Typography>
          <Item>
            {pinspod.map((pin, i) => {
              return (<PodcastPinView key={i} url={pin.url} fav={pin.fav} pin_id={pin.ID} />)
            })}
          </Item>
        </Grid>
      </Grid>
    </div>
  </Layout>
);

function updatePins(){

  pinsyt = pc.getPinsFavFromUser(JSON.parse(sessionStorage.user).ID);

  pins = pcp.getPinsFavFromUser(JSON.parse(sessionStorage.user).ID);

  pinspod = pco.getPinsFavFromUser(JSON.parse(sessionStorage.user).ID);
  console.log(pins)
}

export default Home;