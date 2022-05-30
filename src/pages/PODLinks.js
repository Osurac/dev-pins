import React from 'react';
import '../App.css';
import PodcastPinView from '../components/PinsViews/PodcastPinView';
import { TitlePage } from '../components/General/TitlePage';
import { Layout } from '../layout';
import Grid from '@mui/material/Grid';
import PodDialogCreate from '../components/General/PodDialogCreate';

const PODLinks = () => (
    <Layout className="PODLinks">
        <TitlePage>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    Podcast  {sessionStorage.login === 'true' ? JSON.parse(sessionStorage.user).username : 'No logueado'}
                </Grid>
                <Grid item xs={2}>
                    <PodDialogCreate></PodDialogCreate>
                </Grid>
            </Grid>
        </TitlePage>
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
    </Layout>
);

export default PODLinks;