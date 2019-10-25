import React from 'react';
import './custom.css';
import './ShoppingCart.css';

export default function ShoppingCart(props) {
	/**
	 * ADD HTML PLEASE! THANK YOU!
	 */
	return (
		<div className="ShoppingCard">
			<div className="title">Order</div>
			<div className="item">
				<div className="thumbnail">
					<img src="" />
				</div>
				<div className="content">
					<div className="details">
						<h3>Item 1</h3>
						<p>Stuff</p>
					</div>
					<div className="plus-minus">
						<button className="btn btn-outline-secondary">-</button>
						<input className="form-control" />
						<button className="btn btn-outline-secondary">+</button>
					</div>
					<div className="price">$20.00</div>
				</div>
			</div>
		</div>
	);
}
