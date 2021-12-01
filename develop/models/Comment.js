// WHEN I enter a comment and click on the submit button while signed in
// THEN the comment is saved and the post is updated to display the comment, 
// the comment creator’s username, and the date created

const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        post_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'post',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelNameL: 'comment',
    }
);

module.exports = Comment;