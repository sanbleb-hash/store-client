import React, { useEffect, useState } from 'react';
import Products from './components/products';
import { storeData } from './utlis/data';

const Shop = ({ products }) => {
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
export async function getServerSideProps() {
	const response = await fetch('/api/products');
	const products = await response.json();
	return {
		props: products,
	};
}

export default Shop;
