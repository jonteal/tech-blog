const router = require('express').Router();
const { User, Post, Comment } = require('../models');
// const withAuth = require('../utils/auth');


// GET all posts
router.get('/', async (req, res) => {
    try {
        // GET all posts and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            username: req.session.username,
            user_id: req.session.user_id,
            logged_in: req.session.logged_in,
        });
    }   catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {

    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }

    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['comment'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
            ],
        });

        const post = postData.get({ plain: true });

        req.session.postId = post.id;

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('dashboard', async (req, res) => {

    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }

    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true })
        
        res.render('dashboard', {
            ...user,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


// Login route
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});


// router.get('/edit/"id', async (req, res) => {
//     try {
//         const postData = await Post.findByPk(req.params.id);
//         const post = postData.get({ plain: true })
//         res.status(200).json(post);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })




module.exports = router;