import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BsInfo } from 'react-icons/bs';
import Button from './button';

const Products = ({ product }) => {
	const [showBtn, setShowBtn] = useState(false);

	const router = useRouter();

	return (
		<>
			<div
				className=' min-w-[280px] h-[320px] shadow-lg overflow-hidden relative z-10 flex flex-col rounded-xl  '
				onMouseEnter={() => setShowBtn(!showBtn)}
				onMouseLeave={() => setShowBtn(false)}
			>
				<div className=' w-full h-[300px] relative'>
					<Image
						src={product.image}
						alt=' pic'
						objectFit='cover'
						layout='fill'
						className='z-0'
					/>
				</div>
				<div className='  bg-black/60 rounded-b-xl flex items-start justify-between px-2 text-sm text-gray-300 w-full z-30'>
					<h4 className='inline-block italic'>{product.name}</h4>
					<p className='inline-block'>$ {product.price}</p>
				</div>
				{showBtn && (
					<>
						<Button
							dynamicStyles=' absolute bottom-2 left-2 right-2 px-8 py-3 bg-gray-300 text-gray-800 z-50'
							directions={() => router.push(`/cart`)}
						>
							add to cart
						</Button>
						<span className=' bg-yellow-500/60 text-white p-4 rounded-full  absolute top-8 right-3 z-50'>
							<BsInfo
								className=' text-3xl'
								onClick={() => router.push(`/products/${product._id}`)}
							/>
						</span>
					</>
				)}
			</div>
		</>
	);
};

export default Products;
