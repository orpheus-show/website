require('dotenv').config();

export default function handler(req, res) {
    if (req.method == 'GET') {
        res.status(200).json({ key: process.env.SPOTIFY_TOKEN });
    }
    else {
        res.status(400);
    }
}