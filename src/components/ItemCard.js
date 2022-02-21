import './Styles.css';

const ItemCard = ({ data }) => {
	return (
		<div className='Card'>
			<ul>
				<li>{data.name}</li>
				<li>$ {data.price}</li>
				<li>ID: {data.id}</li>
			</ul>
		</div>
	);
};

export default ItemCard;
