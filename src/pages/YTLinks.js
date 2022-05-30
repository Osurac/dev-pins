import React from 'react';
import '../App.css';
import { Layout } from '../layout';
import { TitlePage } from '../components/General/TitlePage';
import YTPinView from '../components/PinsViews/YTPinView';
import Grid from '@mui/material/Grid';
import YTDialogCreate from '../components/General/YTDialogCreate';

const YTLinks = () => (
    <Layout className="YTLinks">
        <TitlePage>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    Vídeos  {sessionStorage.login === 'true' ? JSON.parse(sessionStorage.user).username : 'No logueado'}
                </Grid>
                <Grid item xs={2}>
                    <YTDialogCreate></YTDialogCreate>
                </Grid>
            </Grid>
        </TitlePage>
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
        <YTPinView></YTPinView>
        <YTPinView></YTPinView>
    </Layout>
);

export default YTLinks;