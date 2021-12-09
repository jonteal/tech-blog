const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// GET individual posts by ID
router.get('/:id', async (req, res) => {

    try {
        const postData = await Post.findByPk(req.params.id, {});

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



router.delete('/:id', withAuth, async (req, res) => {
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



router.put('/:id', async (req, res) => {  
    try {
        const postData = await Post.update({

            title: req.body.title,
            content: req.body.content,
        },
        {
            where: {
                id: req.params.id,
            },
        });

        res.status(201).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;