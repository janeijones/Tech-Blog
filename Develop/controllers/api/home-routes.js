const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

router.get('/', async (req, res) => { //gets all posts for homepage
    try {
        const postData = await Post.findAll({
            include: [User],
        });
        const posts = postData.map((post) => post.get({ plain : true }));

        res.render('all-posts', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            
        })
    }
})
