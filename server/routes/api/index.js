const router = require('express').Router();
const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');

router.use('/user', userRoutes);

/**
 * Are we treating reviews similar to posts, in that they can be searched by quiz and user?
 */

router.use('/review', reviewRoutes);

module.exports = router;