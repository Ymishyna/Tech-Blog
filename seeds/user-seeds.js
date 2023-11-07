const { User } = require('../models');

const userData =
    [{
        "username": "yanaBanana",
        "password": "yana12345"
    },
    {
        "username": "Jwindle",
        "password": "john12345"
    },
    {
        "username": "KoalaIT",
        "password": "jack12345"
    },
    {
        "username": "FlGator",
        "password": "password12345"
    },
    {
        "username": "Ukrainka",
        "password": "slava12345"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;