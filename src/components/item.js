import React from 'react';

import './item.css';

export default function Item(props) {
	return (
		<li key={props.index}>
			<p className="shoeName">{props.shoe.name}</p>
			<img src={props.shoe.image} />
			<p className="shoeDesc">{props.shoe.description}</p>
			<p className="shoePrice">${props.shoe.price}</p>
		</li>
	);
}