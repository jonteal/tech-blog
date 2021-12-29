const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE A NEW USER / SIGN UP
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.logged_in = true;
            req.session.username = userData.username;
            req.session.user_id = userData.id;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


// LOGIN USER ROUTE
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ 
            where: { 
                username: req.body.username,
            },
        });
        if (!userData) {
            res 
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res 
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }
        console.log(userData.username);
        console.log(userData.id);

        // Creating a session, creating a cookie. Stored in a request object
        req.session.save(() => {
            req.session.logged_in = true; // Creating a property called logged in and setting equal to true

            req.session.username = userData.username; // Creating a property called username and setting it equal to the user's data (username)
            req.session.user_id = userData.id; // Creating a user id and setting it equal to the id of the user
            


            res
                .status(200)
                .json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(500).json(err);
    }
});


// LOGOUT A USER
router.post('/logout', withAuth, (req, res) => {
    console.log(req.session.logged_in);
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// EXPORT ROUTER
module.exports = router;