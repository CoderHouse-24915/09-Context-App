import React, { useContext } from 'react';
// Context
import { ItemsContext } from '../itemsContext';

import ItemCard from './ItemCard';

const ItemList = () => {
	const [items, setItems] = useContext(ItemsContext);

	console.log('DATA', items);

	return (
		<div>
			{items.map((item) => {
				return <ItemCard data={item} key={item.id} />;
			})}
		</div>
	);
};

export default ItemList;
