const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// RELATIONSHIPS BETWEEN MODELS
User.hasMany(Comment, { 
    foreignKey: 'user_id', 
});

Comment.belongsTo(User, {
    foreignKey: 'user_id', 
    });

User.hasMany(Post, { 
    foreignKey: 'user_id', 
});

Post.belongsTo(User, { 
    foreignKey: 'user_id', 
});

Post.hasMany(Comment, {
    foreignKey: 'post_id', 
});

// EXPORT MODEL RELATIONSHIPS
module.exports = { User, Post, Comment };