import React from 'react';

const Button = ({ dynamicStyles, children, directions }) => {
	return (
		<button
			className={`${dynamicStyles} inline-block rounded-md`}
			onClick={directions}
		>
			{children}
		</button>
	);
};

export default Button;
