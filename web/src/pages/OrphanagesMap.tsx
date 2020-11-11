import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../assets/styles/pages/orphanages-map.css';

import marker from '../assets/images/marker.svg';
import { mapIcon } from '../utils/mapIcon';

const OrphanagesMap = () => {
	return (
		<div id="page-map">
			<aside>
				<header>
					<Link to="/">
						<img src={marker} alt="Happy" />
					</Link>

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
				zoom={15}
				style={{ width: '100%', height: '100%' }}
			>
				<TileLayer
					url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
				/>
				<Marker icon={mapIcon} position={[-27.5916402, -48.5854992]}>
					<Popup
						closeButton={false}
						minWidth={240}
						maxWidth={240}
						className="map-popup"
					>
						Lar das meninas
						<Link to="/orphanages/1">
							<FiArrowRight size={20} color="#FFF" />
						</Link>
					</Popup>
				</Marker>
			</Map>

			<Link to="/orphanages/create" className="create-orphanage">
				<FiPlus size={32} color="#FFF" />
			</Link>
		</div>
	);
};

export default OrphanagesMap;
