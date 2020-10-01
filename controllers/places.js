const Place = require('../models/Place');
const User = require('../models/user');

module.exports = {
	create,
	index,
	delete: deletePlace,
	update,
	search,
	getFollowedPlaces,
	getAllPlaces,
	getOne
};

function create(req, res) {
	req.body.ownerId = req.user._id;
	Place.create(req.body).then((Place) => {
		res.status(201).json(Place);
	});
}

function create(req, res) {
	req.body.type = req.body.type.toLowerCase();
	req.body.ownerId = req.user._id;
	Place.create(req.body).then((Place) => {
		console.log('Place created:\n', Place);
		User.findById(req.user._id).then((user) => {
			console.log('USER LOCATION', user.location);
			Place.location = user.location;
			Place.save();
			user.Places.push(Place._id);
			user.save();
		});
		res.status(200).json(Place);
	});
}

function index(req, res) {
	Place.find({
		ownerId: req.user._id
	}, (err, Places) => {
		res.status(200).json(Places);
	});
}

function deletePlace(req, res) {
	Place.findOneAndDelete(req.params.id).then((Place) => {
		res.status(200).json(Place);
	});
}

function update(req, res) {
	Place.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	}).then(
		(Place) => {
			res.status(200).json(Place);
		}
	);
}

function search(req, res) {
	const {
		type,
		distance,
		condition
	} = req.query;
	let query = {
		type
	};
	if (condition) {
		query = {
			...query,
			conditions: condition
		};
	}

	const filteredPlaces = [];

	Place.find(query, (err, Places) => {
		Places.forEach((Place) => {
			if (Place.location) {
				const distanceBetween = haversineDistance(
					req.user.location.lat,
					req.user.location.long,
					Place.location.lat,
					Place.location.long,
					true
				);
				if (distanceBetween <= distance) {
					filteredPlaces.push(Place);
				}
			}
		});
		res.status(200).json(filteredPlaces);
		console.log('------filtered Places ------', filteredPlaces)
	});
}

function getFollowedPlaces(req, res) {
	Place.find({
		followers: req.user._id
	}, (err, Places) => {
		res.status(200).json(Places);
	});
}

const haversineDistance = (lat1, lon1, lat2, lon2, isMiles = false) => {
	const toRadian = (angle) => (Math.PI / 180) * angle;
	const distance = (a, b) => (Math.PI / 180) * (a - b);
	const RADIUS_OF_EARTH_IN_KM = 6371;

	const dLat = distance(lat2, lat1);
	const dLon = distance(lon2, lon1);

	lat1 = toRadian(lat1);
	lat2 = toRadian(lat2);

	// Haversine Formula
	const a =
		Math.pow(Math.sin(dLat / 2), 2) +
		Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
	const c = 2 * Math.asin(Math.sqrt(a));

	let finalDistance = RADIUS_OF_EARTH_IN_KM * c;

	if (isMiles) {
		finalDistance /= 1.60934;
	}

	console.log(finalDistance);
	return finalDistance;
};

function getAllPlaces(req, res) {
	Place.find({}, (err, Places) => {
		res.status(200).json(Places);
	});
}

function getOne(req, res) {
	Place.findById(req.params.id, (err, Place) => {
		res.status(200).json(Place);
	})
}