import React from 'react';
import '../App.css';
import { Layout } from '../layout';
import { TitlePage } from '../components/General/TitlePage';
import YTPinView from '../components/PinsViews/YTPinView';

const YTLinks = () => (
    <Layout className="YTLinks">
        <TitlePage>Vídeos  {sessionStorage.login === 'true' ? JSON.parse(sessionStorage.user).username : 'No logueado'} </TitlePage>
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