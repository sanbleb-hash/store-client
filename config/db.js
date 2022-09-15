import mongoose from 'mongoose';

export const connectDB = async (req, res) => {
	const conn = await mongoose.connect(process.env.MONGO_URL);
	console.log(`mongodb connected ${conn.connection.host}`);
};
