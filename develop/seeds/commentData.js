const { Comment, Post } = require('../models');

const commentData = [
    {
        comment: 'This is a comment on post 1 by user 2.',
        user_id: '2',
        post_id: '1',
    },
    {
        comment: 'This is a comment on post 1 by user 3.',
        user_id: '3',
        post_id: '1',
    },
    {
        comment: 'This is a comment post 1 by user 4.',
        user_id: '4',
        post_id: '1',
    },
    {
        comment: 'This is a comment on post 2 by user 1.',
        user_id: '1',
        post_id: '2',
    },
    {
        comment: 'This is a comment post 2 by user 3.',
        user_id: '3',
        post_id: '2',
    },
    {
        comment: 'This is a comment on post 2 by user 4.',
        user_id: '4',
        post_id: '2',
    },
    {
        comment: 'This is a comment on post 3 by user 1.',
        user_id: '1',
        post_id: '3',
    },
    {
        comment: 'This is a comment on post 3 by user 2.',
        user_id: '2',
        post_id: '3',
    },
    {
        comment: 'This is a comment on post 3 by user 4.',
        user_id: '4',
        post_id: '3',
    },
    {
        comment: 'This is a comment on post 4 by user 1.',
        user_id: '1',
        post_id: '4',
    },
    {
        comment: 'This is a comment on post 4 by user 2.',
        user_id: '2',
        post_id: '4',
    },
    {
        comment: 'This is a comment on post 4 by user 3.',
        user_id: '3',
        post_id: '4',
    },
]

const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;