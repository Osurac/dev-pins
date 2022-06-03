import React from 'react';
import '../App.css';
import PodcastPinView from '../components/PinsViews/PodcastPinView';
import { TitlePage } from '../components/General/TitlePage';
import { Layout } from '../layout';
import Grid from '@mui/material/Grid';
import PodDialogCreate from '../components/General/PodDialogCreate';
import PodPinsController from '../controllers/PodPinsController';

let pins = [];
if(sessionStorage.login){
    const pc = new PodPinsController();
    pins = pc.getPinsFromUser(JSON.parse(sessionStorage.user).ID);
}

const PODLinks = () => (
    <Layout className="PODLinks">
        <TitlePage>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    Podcast  {sessionStorage.login === 'true' ? JSON.parse(sessionStorage.user).username : 'No logueado'}
                </Grid>
                <Grid component={'span'} item xs={2}>
                    <PodDialogCreate></PodDialogCreate>
                </Grid>
            </Grid>
        </TitlePage>
        {pins.map((pin, i) => {      
           return (<PodcastPinView key={i} url={pin.url} fav={pin.fav} pin_id={pin.ID} />) 
        })}
    </Layout>
);

export default PODLinks;