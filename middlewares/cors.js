const allowedCors = [
    'https://pindiefrontwistonss.nomoredomainswork.ru'
];

const cors = (req, res, next) => {
    const { origin } = req.headers;

    if (allowedCors.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    next();
};

module.exports = cors;