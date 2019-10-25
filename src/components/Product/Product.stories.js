import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import Product from './index';

export default {
	title: 'Product',
};

export const _default = () => {
	const title = text('title', 'Item 1');
	const description = text('description', 'Something');
	const amount = number('amount', 1);
	const price = text('price', '20.00');

	const props = {
		title,
		description,
		amount,
		price,
	};

	return <Product {...props} />;
};
