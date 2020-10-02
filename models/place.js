const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
	_id: String,
	type: {type: String, enum: ['Restaurant', 'Attraction']},
	avatar: String,
	review: String,
	postedBy: String,
	rating: {type: Number, min: 1, max: 5},
	maskWearing: {type: Number, min: 1, max: 5},
	sixFtDistance: {type: Number, min: 1, max: 5},
	respect: {type: Number, min: 1, max: 5},
	otherRating: String
}, {
	timestamps: true
})

const placeSchema = new Schema({
	type: { type: String },
	name: { type: String },
	avatar: { type: String },
	name: String,
	url: String,
	ranking: String,
	rating: String,
	neighborhood_info: String,
	phone_number: String,
	cuisine_type: String,
	Score: Number,
	location: {
		type: Object,
		default: null,
	},
	reviews: [ReviewSchema],
}, {
	timestamps: true
});

module.exports = mongoose.model('Place', placeSchema, 'Review', reviewSchema);