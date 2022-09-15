import nc from 'next-connect';
import { connectDB } from '../../../config/db';
import Product from '../../../modals/productModal';

const handler = nc();
connectDB();

handler.get(async (req, res) => {
	const id = req.query.id;
	const product = await Product.findById(id);
	if (!product) {
		return res.send('Product not found');
	}
	res.json(product);
});

export default handler;
