const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

const userSchema = new Schema(
	{
		name: String,
		email: { type: String, required: true, lowercase: true, unique: true },
		password: String,
		rankings: {type: String, enum: ['Nervous Newbie', 'Hand Washing Hippie', 'Mask Maven', 'Sanitation Savage', 'Covid Crusher'],
		default: 'Nervous Newbie'},
		avatar: String,
		location: {
			type: Object,
			default: null,
		},
		phoneNumber: String,
		reviews: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
		score: Number
		
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", function (next) {
  // this will be set to the current document
  const user = this;
  if (!user.isModified("password")) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('User', userSchema);