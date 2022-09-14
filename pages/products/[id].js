import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../components/button';
import { storeData } from '../utlis/data';

const Product = () => {
	const router = useRouter();

	const { query } = useRouter();
	const { id } = query;

	const product = storeData.find((product) => id === product.id);
	console.log(product);
	const addToCartHandler = (id) => {
		console.log(id);
	};

	return (
		<div className=' min-h-screen container mx-auto bg-inherit'>
			<div className='py-2'>
				<Link href='/shop'>back to products</Link>
			</div>
			<div className='grid md:grid-cols-4 md:gap-3'>
				<div className='md:col-span-2'>
					<Image
						src={product?.imageUrl}
						alt={product?.name}
						width={640}
						height={640}
						layout='responsive'
					></Image>
				</div>
				<div>
					<ul>
						<li>
							<h1 className='text-lg'>{product?.name}</h1>
						</li>
						<li>Category: {product?.category}</li>
						<li>Brand: {product?.name}</li>
						<li>
							{product?.rating} of {product?.id} reviews
						</li>
						<li>Description: {product?.price}</li>
					</ul>
				</div>
				<div>
					<div className='card p-5'>
						<div className='mb-2 flex justify-between'>
							<div>Price</div>
							<div>${product?.price}</div>
						</div>
						<div className='mb-2 flex justify-between'>
							<div>Status</div>
							<div>{product?.price}</div>
						</div>
						<Button
							dynamicStyles=' w-full border border-black py-2'
							functions={addToCartHandler(product?.id)}
						>
							Add to cart
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
