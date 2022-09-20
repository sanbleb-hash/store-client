import React from 'react';
import { useRouter } from 'next/router';
import Button from '../../components/button';
import { categories } from '../utlis/data';

const Categories = () => {
	const router = useRouter();
	return (
		<main className='w-full h-[90vh] bg-inherit'>
			<div className=' container mx-auto h-full flex flex-wrap gap-3 '>
				{categories.map((category) => (
					<div
						key={category.title}
						className=' flex-1 min-w-[30%] h-[250px] shadow-2xl bg-white rounded-md flex flex-col items-center justify-center relative overflow-hidden  '
					>
						<div
							style={{
								backgroundImage: `url(${category.bg}) `,
								position: 'absolute',
								inset: 0,
							}}
							className=' before:absolute before:inset-0 before:bg-black/40 hover:scale-110 transition-all delay-75 ease-out'
						></div>
						<h3 className='inline-block text-white z-50'>{category.title}</h3>
						<Button
							directions={() => router.push(`/categories/${category.title}`)}
							dynamicStyles={
								'bg-black px-6 py-3 text-gray-100 hover:bg-white hover:text-gray-500 border-black hover:border transition-all delay-100 ease-in-out z-50  '
							}
						>
							go shopping
						</Button>
					</div>
				))}
			</div>
		</main>
	);
};

export default Categories;
