import Link from 'next/link';
import React, { useContext } from 'react';

const Nav = () => {
	return (
		<nav className=' w-screen  h-[10vh] shadow-lg bg-black '>
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
