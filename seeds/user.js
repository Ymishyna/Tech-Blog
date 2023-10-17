const { User } = require('../models');

const userData =
    [{
        "username": "yanaBanana",
        "email": "yana.mishyna92@gmail.com",
        "password": "yana12345"
    },
    {
        "username": "Jwindle",
        "email": "jwindle23@gmail.com",
        "password": "john12345"
    },
    {
        "username": "KoalaIT",
        "email": "jack.smith@gmail.com",
        "password": "jack12345"
    },
    {
        "username": "FlGator",
        "email": "flgator@yahoo.com",
        "password": "password12345"
    }]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;