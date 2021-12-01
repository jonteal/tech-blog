const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});



module.exports = { User, Comment, Post };