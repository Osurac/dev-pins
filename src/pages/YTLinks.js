import React from 'react';
import '../App.css';
import { Layout } from '../layout';
import { TitlePage } from '../components/General/TitlePage';
import YTPinView from '../components/PinsViews/YTPinView';

const YTLinks = () => (
    <Layout className="YTLinks">
        <TitlePage>Mis vídeos</TitlePage>
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