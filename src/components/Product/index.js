import React from 'react';
import './Product.css';

export default function Product(props) {
	const { thumbnail, title, description, amount, price } = props;
	return (
		<div className="item">
			<div className="thumbnail">
				<img src={thumbnail} />
			</div>
			<div className="content">
				<div className="details">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div className="plus-minus">
					<button className="btn btn-outline-secondary">-</button>
					<input className="form-control" value={amount} />
					<button className="btn btn-outline-secondary">+</button>
				</div>
				<div className="price">${price}</div>
			</div>
		</div>
	);
}
