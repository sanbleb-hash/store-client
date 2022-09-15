import nc from 'next-connect';
import { connectDB } from '../../../config/db';
import Product from '../../../modals/productModal';

const handler = nc();
connectDB();

handler.get(async (req, res) => {
	const products = await Product.find({});
	res.json(products);
});

export default handler;
