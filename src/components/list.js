import React from 'react';

import Item from './item';

import './list.css';

export default function List(props) {
	const items = props.items.map(
		(item, index) => 
		<li key={index}><Item shoe={item} onClick={(e) => props.onClick(e)} />
		</li>)
	return (
		<ul>
			{items}
		</ul>
	)
}