const router = require('express').Router();
const { User } = require('../../models');


router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({ //creates new user
            username: req.body.username,
            password: req.body.password,
        }); 

        req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;

            res.json(newUser)
        })
    }   catch (err) {
        res.status(500).json(err)
    }
})


router.post('/login', async (req,res) =>{ //
    try {
        const user = await User.findOne({ //checks if user exits in db
            where: {
                username: req.body.username
            }
        })

        if (!user) { //if user not found, 
            res.status(400).json({ message: 'Username not found!' })
            return;
        }

       
        const passwordValidate = user.checkPassword(req.body.password) //if user exits, check if password is valid

        if (!passwordValidate) {
            res.status(400).json({ message: 'Incorrect Password!' })
            return;
        }

        req.session.save(() => { //saves session data
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;

            res.json({ user, message: 'Successful Login'})
        })
    }   catch {
        res.status(400).json({ message: 'Failed to login' })
    }
})

router.post('/logout', async (req, res) => { //logs out of session, destroyed 
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})


module.exports = router;
