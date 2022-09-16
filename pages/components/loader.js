import React from 'react';
import { FaLoader } from 'react-icons/fa';

const Loader = () => {
	return (
		<div className=' w-screen min-h-[80vh] flex items-center justify-center text-purple-500 text-6xl'>
			<FaLoader />
		</div>
	);
};

export default Loader;
