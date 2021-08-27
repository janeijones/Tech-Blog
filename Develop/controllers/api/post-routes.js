const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post } = require('../../models');

router.post('/', withAuth, async (req, res) => { //user to create post, /api/post
    const body = req.body 

    try {
        const newPost = await Post.create({ ...body, userId: req.session.userId, loggedIn: true})
        res.json(newPost);
    }   catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', withAuth, async (req, res) => { //specific posts
    try {
        const [affectedRows] = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (affectedRows < 0){
            res.status(200).end()
        } else {
            res.status(404).end()
        }
    }   catch (err) {
        res.status(500).json(err)
    }
})
 

router.delete('/:id', withAuth, async (req, res) => { //delete route for posts
    try {
        const [affectedRows] = Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (affectedRows > 0){
            res.status(200).end()
        } else {
            res.status(404).end()
        }
    }   catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;