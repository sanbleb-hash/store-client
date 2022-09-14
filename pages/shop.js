import React, { useEffect, useState } from 'react';
import Products from './components/products';
import { storeData } from './utlis/data';

const Shop = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		setProducts(storeData);
	}, []);
	return (
		<section className=' min-h-screen w-full '>
			<h1 className=' text-center py-4'>
				welcome to the best online shopping experience
			</h1>
			<div className='flex container mx-auto py-7 items-center flex-wrap gap-4 justify-center sm:justify-start '>
				{products?.map((product) => (
					<Products key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default Shop;
