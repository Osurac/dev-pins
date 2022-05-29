import React from 'react';
import '../App.css';
import BasicPinView from '../components/PinsViews/BasicPinView';
import { TitlePage } from '../components/General/TitlePage';
import { Layout } from '../layout';

const PINLinks = () => (
    <Layout className="PINLinks">
        <TitlePage>Mis pins</TitlePage>
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