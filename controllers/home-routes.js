const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

router.get('/', async (req, res) => { //gets all posts for homepage
    try {
        const postData = await Post.findAll({
            include: [User],
        });
        const posts = postData.map((post) => post.get({ plain : true })); //take posts from db and convert to plain objs

        res.render('all-posts', { layout: 'dashboard', posts, loggedIn: true});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => { //gets one posted comment 
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });

        if (postData) { // if post is found, render individual post
            const post = postData.get({ plain: true });

            res.render('single-post', { post, loggedIn: true});
            
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500). json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
})

router.get('/logout', (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
})

module.exports = router;