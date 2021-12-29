const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');


// GET ALL POSTS
router.get('/', async (req, res) => {
    try {
        // GET ALL POSTS AND JOIN WITH USER DATA

        // console.log(req.body);
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ["username"],
                },
            ],
        });

        // SERIALIZE THE DATA SO THE TEMPLATE CAN READ IT
    
        const posts = postData.map((post) => post.get({ plain: true }));
        
        res.render("homepage", {
            posts,
            logged_in: req.session.logged_in,
        });
    }   catch (err) {
        res.status(500).json(err);
    }
});


// GET LOGIN ROUTE
router.get("/login", (req, res) => {
    console.log(req.session);
    if (req.session.logged_in) {
        res.redirect("/dashboard");
        return;
    }

    res.render("login");
});



// GET DASHBOARD/PROFILE ROUTE
router.get('/dashboard', withAuth, async (req, res) => {

    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true })
        
        res.render('dashboard', {
            ...user,
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET Post by ID
router.get('/post/:id', async (req, res) => {

    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: ["comment", "createdAt"],
                    include: {
                        model: User,
                        attributes: ["username"]
                    }
                },
                {model: User, attributes: ["username"]},
            ],
        });
        // console.log(postData);
        const post = postData.get({ plain: true });

        // console.log(post);
        
        req.session.save(() => {
            req.session.post_id = post.id;
        })
        let objResults = {
            ...post,
            logged_in: req.session.logged_in,
        }
        console.log(objResults);
        res.render("blogpost", objResults);
    } catch (err) {
        res.status(500).json(err);
    }
});


// EXPORT ROUTER
module.exports = router;