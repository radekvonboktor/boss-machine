const checkMillionDollarIdea = () => {
    return (req, res, next) => {
        if (req.body.numWeeks * req.body.weeklyRevenue >= 1_000_000) {
            res.status(200).send(`This is a million dollars idea!`);
        }
        next();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
