const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
	type: { type: String },
	name: { type: String },
	avatar: { type: String },
	posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
	
	location: {
		type: Object,
		default: null,
	},
});

module.exports = mongoose.model('Place', placeSchema);