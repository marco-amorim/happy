import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import '../assets/styles/pages/orphanages-map.css';

import marker from '../assets/images/marker.svg';

const mapIcon = Leaflet.icon({
	iconUrl: marker,
});

const OrphanagesMap = () => {
	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={marker} alt="Happy Marker" />

					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita {`:)`}</p>
				</header>

				<footer>
					<strong>Florianópolis</strong>
					<strong>Santa Catarina</strong>
				</footer>
			</aside>

			<Map
				center={[-27.5916402, -48.5854992]}
				zoom={14}
				style={{ width: '100%', height: '100%' }}
			>
				<TileLayer
					url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
				/>
				<Marker icon={mapIcon} position={[-27.5916402, -48.5854992]} />
			</Map>

			<Link to="" className="create-orphanage">
				<FiPlus size={32} color="#FFF" />
			</Link>
		</div>
	);
};

export default OrphanagesMap;
