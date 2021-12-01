const sequelize = require('../config/connection');
const user = require('./userData.json');
const comment = require('./commentData.json');
const post = require('./postData.json');


const seedAll = async () => {
    await sequelize.sync({ force: true }).catch((err) => { console.log(err) });

    await seedUser().catch((err) => { console.log(err) });

    await seedPost().catch((err) => { console.log(err) });

    await seedComment().catch((err) => { console.log(err) });

    process.exit(0);
};

seedAll();