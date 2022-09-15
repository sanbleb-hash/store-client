import nc from 'next-connect';
import { connectDB } from '../../../config/db';
import User from '../../../modals/userModal';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../../utils/getToken';

const handler = nc();
connectDB();

handler.post(async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.send('user not found');
		}
		const comparedPassword = await bcrypt.compare(password, user.password);
		if (user && comparedPassword) {
			const token = generateToken(user);

			res.status(200).json({
				token,
				name: user.name,
				email: user.email,
				isAdmin: user.isAdmin,
			});
		} else {
			return res.status(403).send('wrong credentials');
		}
	} catch (err) {
		console.log(err);
	}
});

export default handler;
