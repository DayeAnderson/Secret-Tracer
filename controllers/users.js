const User = require('../models/user');

module.exports = {
	index,
	showProfile,
	update,
	delete: deleteUser,
	getOne,
};

function index(req, res) {
	console.log('user', req.user);
	User.find({}).then((users) => res.json(users));
}

function showProfile(req, res) {
	console.log('user\n' + req.user);
	User.findById(req.params.id).then((userInfo) => {
		res.json(userInfo);
	});
}

function update(req, res) {
	User.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	}).then((user) => {
		res.status(200).json(user);
	});
}


function deleteUser(req, res) {
	console.log(req.user);
	User.findByIdAndDelete(req.user._id)
		.then((user) => {
			res.status(200).json(user);
		})
		.catch((err) => res.json(err));
}

function getOne(req, res) {
	User.findById(req.params.id, (err, user) => {
		res.status(200).json(user.name);
	});
}