import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import '../assets/styles/pages/orphanages-map.css';

import marker from '../assets/images/marker.svg';

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

			<div></div>

			<Link to="" className="create-orphanage">
				<FiPlus size={32} color="#FFF" />
			</Link>
		</div>
	);
};

export default OrphanagesMap;
