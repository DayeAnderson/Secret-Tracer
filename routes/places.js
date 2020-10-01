const router = require('express').Router();
const placesCtrl = require('../controllers/places');
const upload = require('../src/services/upload')
const singleUpload = upload.single('image')

router.use(require('../config/auth'));
router.get('/', checkAuth, placesCtrl.index);
router.get('/getAllplaces', checkAuth, placesCtrl.getAllplaces);
router.get('/following', checkAuth, placesCtrl.getFollowedplaces);
router.get('/search', checkAuth, placesCtrl.search);
router.get('/:id', checkAuth, placesCtrl.getOne);
router.post('/', checkAuth, placesCtrl.create);
router.put('/:id', checkAuth, placesCtrl.update);
router.delete('/:id', checkAuth, placesCtrl.delete);

router.post('/upload', checkAuth, function(req, res) {
	singleUpload(req, res, (err) => {
		if (err) {
			return res.status(422).send({
				errors: [{
					title: 'Image Upload Error',
					detail: err.message
				}]
			});
		}
		return res.json({'imageUrl': req.file.location})
	})
})

function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;