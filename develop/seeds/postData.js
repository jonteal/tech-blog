const { Post } = require('../models');

const postData = [
    {
        "title": "How to write great CSS",
        "post": "Don't forget about your media queries!",
        "user_id": 1
    },
    {
        "title": "The power of descriptive HTML tags",
        "post": "They are way more descriptive than plain old divs!",
        "user_id": 2
    },
    {
        "title": "Why Javascript is the best coding language",
        "post": "It's very intuitive when you really think about it.",
        "user_id": 3
    },
    {
        "title": "How to land your first tech job",
        "post": "Know your data structures and algorithmic principles.",
        "user_id": 4
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;