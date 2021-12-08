const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            post_id: req.session.post_id,
            created_date: new Date(),

        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const getPost = await Comment.findByPk(req.params.id, {});
        const post = getPost.get({ plain: true });
        res.json(post);
    } catch (err) {
        res.status(500).json
    }
});


module.exports = router;