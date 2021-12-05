const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        if (req.session.loggedIn) {
            res.render('post', { posts, loggedIn: req.session.loggedIn, loggedUser: req.session.loggedUser });
        } else {
            res.render('post', { posts });
        }
    }   catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: ['comment', 'createdAt'],
                    include: {
                        model: User,
                        attributes: ['user']
                    }
                },
                {
                    model: User,
                    attributes: ['user']
                }
            ],
        });

        const post = postData.get({ plain: true });

        req.session.currentPost = req.params.id;

        res.render('post', {
            ...post,
            loggedIn: req.session.loggedIn, loggedUser: req.session.loggedUser 
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
})

router.get('/edit/"id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({ plain: true })
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.loggedUser, {
            include: {
                model: Post,
            },
            attributes: { excludes: ['password'] }
        });
        user = userData.get({ plain: true })
        
        res.render('dashboard', { user, loggedIn: req.session.loggedIn, loggedUser: req.session.loggedUser })
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;