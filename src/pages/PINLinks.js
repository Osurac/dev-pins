import React from 'react';
import '../App.css';
import BasicPinView from '../components/PinsViews/BasicPinView';
import { TitlePage } from '../components/General/TitlePage';
import { Layout } from '../layout';
import PinDialogCreate from '../components/General/PinDialogCreate';
import PinsController from '../controllers/PinsController';
import Grid from '@mui/material/Grid';


let pins = [];
let pc = new PinsController();
if(sessionStorage.login){
    pins = pc.getPinsFromUser(JSON.parse(sessionStorage.user).id);
}

const PINLinks = () => (
    <Layout className="PINLinks">
        <TitlePage>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    Pins  {sessionStorage.login === 'true' ? JSON.parse(sessionStorage.user).username : 'No logueado'}
                </Grid>
                <Grid component={'span'} item xs={2}>
                    <PinDialogCreate></PinDialogCreate>
                </Grid>
            </Grid>
        </TitlePage>
        {pins.map((pin, i) => {      
             return (<BasicPinView key={i} url={pin.url} fav={pin.fav} pin_id={pin.ID}  />)
        })}
    </Layout>
);

export default PINLinks;