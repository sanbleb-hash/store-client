import { timeStamp } from 'console';
import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		description: String,
		numReviews: { type: Number, default: 0 },
		countInStock: { type: Number, default: 0 },
		rating: { type: String },
		review: {
			name: { type: String, required: true },
			rating: { type: Number, default: 0 },
			comment: { type: String, required: true },
		},

		brand: { type: String },
		category: { type: [String] },
	},
	{ timeStamp: true }
);

const Product =
	mongoose.models.Product || mongoose.model('Product ', productSchema);

export default Product;
