require('dotenv').config();

export default function handler(req, res) {
    if (req.method == 'GET') {
        res.status(200).json({
            key: {
                id: process.env.REACT_APP_CLIENT_ID,
                secret: process.env.REACT_APP_CLIENT_SECRET
            }
         });
    }
    else {
        res.status(400);
    }
}