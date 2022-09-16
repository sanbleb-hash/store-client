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
				className=' min-w-[300px] h-[450px] shadow-lg rounded-lg relative z-10 flex flex-col  '
				onMouseEnter={() => setShowBtn(!showBtn)}
				onMouseLeave={() => setShowBtn(false)}
			>
				<Image
					src={product.image}
					alt=' pic'
					objectFit='cover'
					layout='fill'
					className='z-0'
				/>
				<div className='  bg-black flex items-start justify-between px-2 text-sm text-gray-300 w-full z-30'>
					<h4 className='inline-block italic'>{product.name}</h4>
					<p className='inline-block'>$ {product.price}</p>
				</div>
				{showBtn && (
					<>
						<Button
							dynamicStyles=' absolute bottom-2 left-2 right-2 px-8 py-3 bg-gray-300 text-gray-800'
							directions={() => router.push(`/cart`)}
						>
							add to cart
						</Button>
						<span className=' bg-yellow-500/60 text-white p-4 rounded-full  absolute top-8 right-3 z-50'>
							<BsInfo
								className=' text-3xl'
								onClick={() => router.push(`/products/${product.id}`)}
							/>
						</span>
					</>
				)}
			</div>
		</>
	);
};

export default Products;
