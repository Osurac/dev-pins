import React from 'react';
import '../App.css';
import PodcastPinView from '../components/PinsViews/PodcastPinView';
import { TitlePage } from '../components/General/TitlePage';
import { Layout } from '../layout';

const PODLinks = () => (
    <Layout className="PODLinks">
        <TitlePage>Podcast  {sessionStorage.login === 'true' ? JSON.parse(sessionStorage.user).username : 'No logueado'} </TitlePage>
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