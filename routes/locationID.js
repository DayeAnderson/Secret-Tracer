const express = require('express');
const router = express.Router();
const locationIDCtrl = require('../controllers/locationID');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.post('/', locationIDCtrl.getLocation);
router.use(require('../config/auth'));

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }
/*---------- Auth Checker ----------*/

module.exports = router;