import React from 'react';
import '../App.css';
import BasicPinView from '../components/PinsViews/BasicPinView';
import { TitlePage } from '../components/General/TitlePage';
import { Layout } from '../layout';

const PINLinks = () => (
    <Layout className="PINLinks">
        <TitlePage>Pins  {sessionStorage.login === 'true' ? JSON.parse(sessionStorage.user).username : 'No logueado'} </TitlePage>
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