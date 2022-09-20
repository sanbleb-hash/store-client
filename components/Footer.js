import React from 'react';

const Footer = () => {
	const age = new Date();
	return (
		<div className=' min-h-[30vh] bg-black text-gray-400'>
			{' '}
			<p className='text-white fixed right-3  bottom-6'>
				&copy; @san bleb {age.getFullYear()}
			</p>
		</div>
	);
};

export default Footer;
