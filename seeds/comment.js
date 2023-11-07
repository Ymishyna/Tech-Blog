const { Comment } = require('../models');

const commentData = [{
        comment_text: "WOW! Love this!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "This is my first comment :)",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Grate post, keep us updated",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Very interesting, nice work explaining it in details",
        user_id: 4,
        post_id: 4
    },
    {
        comment_text: "Crazy worl we are leaving in",
        user_id: 5,
        post_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;