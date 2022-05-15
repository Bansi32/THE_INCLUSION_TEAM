const User = require('../models/user');
const creatUser = async (req, res, next) => {
    try {
        const body = req.body;
        let newUser = new User(body);
        await newUser.save();
        res.status(201).json({ newUser });
    } catch (err) {
        return next(err);
    }        
};

const getUser = async (req, res, next) => {
    let user = await User.find({ username: req.body.username });
    let password = await User.find({ username: req.body.password });
    try {
        if (!user || !password) {
            res.status(400).json({message:'Please fill the data'});  
        }
        else {
            res.status(201).json({user});
        }
    } catch (err) {
        return next(error);
    }

};

module.exports= creatUser;
module.exports = getUser;