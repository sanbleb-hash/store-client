import React from 'react';

const Button = ({ size, children, pick }) => {
	return (
		<button className={`${size} inline-block rounded-md`} onClick={pick}>
			{children}
		</button>
	);
};

export default Button;
