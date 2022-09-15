import nc from 'next-connect';
import { connectDB } from '../../../config/db';
import User from '../../../modals/userModal';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../../utils/getToken';

const handler = nc();
connectDB();

handler.post(async (req, res) => {
	const { name, email, password, isAdmin } = req.body;
	const salt = await bcrypt.genSalt(10);
	const encryptedPassword = await bcrypt.hash(password, salt);
	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(401).json('user already exist pliz login');
		}
		const newUser = new User({
			name,
			email,
			password: encryptedPassword,
			isAdmin: false,
		});
		const user = await newUser.save();
		const token = generateToken(user);

		res.status(201).json({
			token,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} catch (err) {
		console.log(err);
	}
});

export default handler;
