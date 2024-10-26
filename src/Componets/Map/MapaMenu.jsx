import React from 'react';
import {Link} from 'react-router-dom';
import Card from '../Vista/Card';
import data from '../Vista/data/MOCK_DATA.json';
import Mapa from './Mapa'

const MapaMenu = () => {
    return (
        <div>
            <Mapa></Mapa>
        </div>
    );
};

export default MapaMenu;