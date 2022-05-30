import React from 'react';
import '../App.css';
import BasicPinView from '../components/PinsViews/BasicPinView';
import { TitlePage } from '../components/General/TitlePage';
import { Layout } from '../layout';
import PinDialogCreate from '../components/General/PinDialogCreate';
import Grid from '@mui/material/Grid';

const PINLinks = () => (
    <Layout className="PINLinks">
        <TitlePage>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    Pins  {sessionStorage.login === 'true' ? JSON.parse(sessionStorage.user).username : 'No logueado'}
                </Grid>
                <Grid item xs={2}>
                    <PinDialogCreate></PinDialogCreate>
                </Grid>
            </Grid>
        </TitlePage>
        <BasicPinView></BasicPinView>
        <BasicPinView></BasicPinView>
        <BasicPinView></BasicPinView>
        <BasicPinView></BasicPinView>
        <BasicPinView></BasicPinView>
        <BasicPinView></BasicPinView>
        <BasicPinView></BasicPinView>
        <BasicPinView></BasicPinView>
        <BasicPinView></BasicPinView>
        <BasicPinView></BasicPinView>
    </Layout>
);

export default PINLinks;