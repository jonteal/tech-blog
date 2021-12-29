const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// POST route for comment
router.post("/comment", withAuth, async (req, res) => {
    console.log(req.body);
    try {
        const newComment = await Comment.create({
            comment: req.body.commentContent,
            user_id: req.session.user_id,
            post_id: req.session.post_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET route for comments by ID
router.get("/:id", async (req, res) => {
    try {
        const getPost = await Comment.findByPk(req.params.id, {});
        const post = getPost.get({ plain: true });
        res.json(post);
    } catch (err) {
        res.status(500).json
    }
});


// Exporting the router
module.exports = router;