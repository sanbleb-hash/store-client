import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Products from './components/products';

const Shop = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			const res = await fetch('/api/products', {
				method: 'GET',
			});
			const response = await res.json();
			setProducts(response);
		}
		fetchProducts();
	}, []);
	console.log(products);

	return (
		<section className=' h-screen w-full'>
			<h1 className=' text-center py-4'>
				welcome to the best online shopping experience
			</h1>
			<div className='flex w-full items-center flex-wrap gap-4 justify-center sm:justify-start '>
				{products?.map((product) => (
					<Products key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};
// export async function getServerSideProps() {
// 	return {
// 		props: { products: [1, 2, 3, 4, 5, 6, 7, 8] }, // will be passed to the page component as props
// 	};
// } this is returning undefined

export default Shop;
