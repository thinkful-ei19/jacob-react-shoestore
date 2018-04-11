import React from 'react';

import Item from './item';

import './list.css';

export default function List(props) {
	console.log([props.items]);
	const items = props.items.map((item, key) => <Item shoe={item} index={key} />)
	return (
		<ul>
			{items}
		</ul>
	)
}