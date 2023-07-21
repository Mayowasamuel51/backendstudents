const classmodel = require('../Models/classses')




exports.createClass = async (req, res) => {
    const { className } = req.body;
    const classess = await  classmodel.create({
       className
    })
    try {
        res.status(201).json({
            data: classess,
        })
    } catch (err) {
        res.json({
            data:err.message
        })
    }
}

