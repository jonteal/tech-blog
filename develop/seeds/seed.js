const sequelize = require('../config/connection');
const userSeed = require('./userData');
const commentSeed = require('./commentData');
const postSeed = require('./postData');


const seedAll = async () => {
    await sequelize.sync({ force: true }).catch((err) => { console.log(err) });

    await userSeed().catch((err) => { console.log(err) });

    await postSeed().catch((err) => { console.log(err) });

    await commentSeed().catch((err) => { console.log(err) });

    process.exit(0);
};

seedAll();