const router = require('express').Router();

// Sets routes to api calls
const userRoutes = require('./user');
const postRoutes = require('./post');
const commentRoutes = require('./comment-route');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;