import React from 'react';

const SinglePage = () => {
	const categories = [
		{
			title: 'women',
			buttonText: 'shop now',
		},
		{
			title: 'men',
			buttonText: 'shop now',
		},
		{
			title: 'children',
			buttonText: 'shop now',
		},
		{
			title: 'trending',
			buttonText: 'shop now',
		},
		{
			title: 'offers',
			buttonText: 'shop now',
		},
	];
	return (
		<main className='w-full h-[90vh] bg-inherit'>
			<div className=' container mx-auto h-full flex flex-wrap flex-1 '>
				{categories.map((category) => (
					<div key={category.title} className=''>
						{category.title}
					</div>
				))}
			</div>
		</main>
	);
};

export default SinglePage;
