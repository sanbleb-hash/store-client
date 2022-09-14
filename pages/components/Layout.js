import React from 'react';
import Footer from './Footer';
import Nav from './navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
