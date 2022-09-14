import Link from 'next/link';
import React from 'react';

const Nav = () => {
	const isActive = [
		'text-gray-500 ',
		'border',
		'border-bottom ',
		'scale-110',
		'pb-4',
	];
	return (
		<nav className=' w-screen bg-transparent h-[10vh] shadow-lg '>
			<div className='flex items-center justify-between container mx-auto h-full text-gray-500'>
				<h1>
					<Link href='/'>my shop</Link>
				</h1>
				<ul className='flex items-center justify-between gap-3'>
					<li>
						<Link href='/shop'>shop</Link>
					</li>
					<li>
						<Link href='/cart'>cart</Link>
					</li>
					<li>
						<Link href='/login'>login</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
