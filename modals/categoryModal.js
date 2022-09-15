import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
	name: { enum: ['men', 'women', 'children', 'trending', 'offers'] },
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
