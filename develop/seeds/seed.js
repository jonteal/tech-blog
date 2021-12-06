const userSeed = require('./userData');
const commentSeed = require('./commentData');
const postSeed = require('./postData');



const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');


const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of postData) {
        await Post.create({
            ...post,
            user_id: users[Math.floor(Math.random() * users.length)].isSoftDeleted,
        });
    }

    // for (const comment of commentData) {
    //     await Comment.create({
    //         ...comment,
    //     })
    // }

    process.exit(0);
}


// const seedAll = async () => {
//     await sequelize.sync({ force: true }).catch((err) => { console.log(err) });

//     await userSeed().catch((err) => { console.log(err) });

//     await postSeed().catch((err) => { console.log(err) });

//     await commentSeed().catch((err) => { console.log(err) });

//     process.exit(0);
// };

seedDatabase();