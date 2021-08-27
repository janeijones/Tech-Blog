const router = require('express').Router();
const { Post } = require('../models/');

const withAuth = require('../utils/auth'); //middleware used to ensure session is logged in


router.get('/', withAuth, async (req, res) => { //get all the posts created by user
    try {
        const postData = await Post.findAll({
            where: {
                userId: req.session.userId,
            }
        });

        const posts = postData.map((post) => post.get({ plain: true }))
        console.log(posts);

        res.render('all-posts-admin', { layout: 'dashboard', posts, req.session.loggedIn: true });
    } catch (err) {
        res.redirect('/')
    }
});


router.get('/new', withAuth, async (req,res) => { //user to create a post
    res.render('new-posts', { layout: 'dashboard', loggedIn: true });
});


router.get('/edit/:id', withAuth, async (req, res) => { //route to allow user to edit post by id
    try {
        const postData = await Post.findByPk(req.params.id)

        if (postData) {
            const post = postData.get({ plain: true });

            res.render('edit-post', { layout: 'dashboard', post, loggedIn: true });
        } else {
            res.status(404).end();
        }
    }   catch {
        res.redirect('login')
    }
});

module.exports = router;
