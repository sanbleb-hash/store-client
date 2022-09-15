import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		password: { type: String, required: true },
		email: { type: String, unique: true, required: true },
		isAdmin: { type: boolean, default: false },
	},
	{ timeStamp: true }
);

const User = mongoose.model('User', userSchema);

export default User;
