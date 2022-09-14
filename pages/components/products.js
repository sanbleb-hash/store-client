import Image from 'next/image';
import React, { useState } from 'react';
import Button from './button';

const Products = ({ product }) => {
	const [showBtn, setShowBtn] = useState(false);
	return (
		<>
			<div
				className=' min-w-[300px] h-[450px] shadow-lg rounded-lg relative z-10 flex flex-col  '
				onMouseEnter={() => setShowBtn(!showBtn)}
				onMouseLeave={() => setShowBtn(false)}
			>
				<Image
					src={product.imageUrl}
					alt=' pic'
					objectFit='cover'
					layout='fill'
					className='z-0'
				/>
				<div className='  bg-black flex items-start justify-between px-2 text-sm text-gray-300 w-full z-50'>
					<h4 className='inline-block italic'>{product.name}</h4>
					<p className='inline-block'>$ {product.price}</p>
				</div>
				{showBtn && (
					<Button
						size=' absolute bottom-2 left-2 right-2 px-8 py-3 bg-gray-300 text-gray-800'
						stylez={() => console.log(product.id)}
					>
						add to cart
					</Button>
				)}
			</div>
		</>
	);
};

export default Products;
