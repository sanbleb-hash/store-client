import '../styles/globals.css';
import Layout from './components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<main className=' prose-xl text-gray-700    font-openSans prose-headings:font-semibold scroll-smooth w-screen bg-white min-h-screen mx-auto heading:tracking-wider leading-6 '>
				<Component {...pageProps} />
			</main>
		</Layout>
	);
}

export default MyApp;
