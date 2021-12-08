const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET individual posts by ID
router.get('/:id', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }

    try {
        const postData = await Post.findByPk(req.params.id, {

        });

        const post = postData.get({ plain: true });

        req.session.postId = post.id;

        res.json(post);

    } catch (err) {
        res.status(500).json(err);
    }
})


router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});



router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});



router.put('/edit/:id', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    
    try {
        const postData = await Post.update({

            title: req.body.title,
            description: req.body.description
        },
        {
            where: {
                id: req.params.id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/comment', async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment: req.body.comment,
            user_id: req.session.user_id,
            post_id: req.session.post_id,
        });


        res.status(204).json(newComment);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;

