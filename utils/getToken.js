import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
	return jwt.sign(
		{
			id: user._id,
			isAdmin: user.isAdmin,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: '1w',
		}
	);
};
