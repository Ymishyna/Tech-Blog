const { Post } = require('../models');

const postData = [
    {
        title: "The Future of AI in Healthcare",
        content: "Artificial Intelligence is revolutionizing the healthcare industry. Discover how AI is enhancing diagnostics, predicting disease outbreaks, and improving patient care.",
        user_id: 5
    },
    {
        title: "The Rise of Remote Work Tools",
        content: "Remote work is here to stay, and so are the tools that make it possible. Learn about the latest collaboration platforms, project management apps, and video conferencing solutions.",
        user_id: 2
    },
    {
        title: "Blockchain Beyond Cryptocurrency",
        content: "Blockchain technology is finding applications beyond cryptocurrencies. Explore how it's transforming supply chain management, voting systems, and more.",
        user_id: 2

    },
    {
        title: "5G and the Internet of Things (IoT)",
        content: "The rollout of 5G is unlocking new possibilities for IoT. Find out how ultra-fast connections are shaping smart cities, autonomous vehicles, and connected devices.",
        user_id: 5
    },
    {
        title: "Cybersecurity Threats in 2023",
        content: "Stay informed about the evolving landscape of cybersecurity threats. From ransomware attacks to phishing schemes, we break down the top concerns for the year ahead.",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
