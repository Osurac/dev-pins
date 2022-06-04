import React from 'react';
import '../App.css';
import { Layout } from '../layout';
import { TitlePage } from '../components/General/TitlePage';
import YTPinView from '../components/PinsViews/YTPinView';
import Grid from '@mui/material/Grid';
import YTDialogCreate from '../components/General/YTDialogCreate';
import YTpinsController from '../controllers/YTPinsController';

let pins = [];
if(sessionStorage.login){
    const pc = new YTpinsController();
    pins = pc.getPinsFromUser(JSON.parse(sessionStorage.user).id);
}

const YTLinks = () => (
    <Layout className="YTLinks">
        <TitlePage>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    Vídeos  {sessionStorage.login === 'true' ? JSON.parse(sessionStorage.user).username : 'No logueado'}
                </Grid>
                <Grid component={'span'} item xs={2}>
                    <YTDialogCreate></YTDialogCreate>
                </Grid>
            </Grid>
        </TitlePage>
        {pins.map((pin, i) => {      
        return (<YTPinView  key={i} url={pin.url} fav={pin.fav} pin_id={pin.ID} thumbnail={pin.thumbnail} title={pin.title}  channelTitle={pin.channelTitle}/>)
        })}
    </Layout>
);

export default YTLinks;