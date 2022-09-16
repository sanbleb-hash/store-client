import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Loader from '../components/loader';

const Product = ({ product }) => {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (product) setLoading(false);
	}, [product]);

	const addToCartHandler = (id) => {
		console.log(id);
	};

	return (
		<div className=' min-h-screen container mx-auto bg-inherit'>
			{loading && Loader}
			<div className='py-2'>
				<Link href='/shop'>back to products</Link>
			</div>
			<div className='grid md:grid-cols-4 md:gap-3'>
				<div className='md:col-span-2'>
					<Image
						src={product?.image}
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
						<li>Category: {product?.category[0]}</li>
						<li>Brand: {product?.brand}</li>
						<li>
							{product?.rating} of {product?.reviews} reviews
						</li>
						<li>Description: {product?.description}</li>
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
							<div>
								{product?.countInStock > 0 ? (
									<span className=' text-green-400'>
										{product.countInStock} items available
									</span>
								) : (
									<span className=' text-red-400'>out of stock</span>
								)}
							</div>
						</div>
						<button
							className=' w-full border border-black py-2 active:scale-105 transition-all delay-75'
							onClick={addToCartHandler}
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export async function getServerSideProps(context) {
	const { params } = context;
	const { id } = params;

	const { data } = await axios.get('http://localhost:3000/api/products/' + id);

	return {
		props: { product: data },
	};
}

export default Product;
