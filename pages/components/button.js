import React from 'react';

const Button = ({ size, children, stylez }) => {
	return (
		<button className={`${size} inline-block rounded-md`} onClick={stylez}>
			{children}
		</button>
	);
};

export default Button;
