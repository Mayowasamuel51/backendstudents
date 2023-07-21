const Studentmodel = require('../Models/student-model');
const StudentModel = require('../Models/student-model')
const multer = require('multer')


//first step
const multerStroage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, 'public/img/students')
    },
    filename: (req, file, cd) => {
        const ext = file.mimetype.split('/')[1];
        cd(null, `user-${Date.now()}.${ext}`)

    }
})
///second step
const multerFilter = (req, file, cd) => {
    if (file.mimetype.startsWith('image')) {
        cd(null, true)
    } else {
        cd('not image ', false)
    }
}
///thrid step
const uploads = multer({
    storage: multerStroage,
    fileFilter: multerFilter
})
//fourth step
exports.uploadedUserPhoto = uploads.single('testImage')

exports.createStudent = async (req, res) => {
    const { firstName, lastName, age, schoolfees, gender, parentName, parentNumber, studentclass } = req.body;
    const student = await StudentModel.create({
        schoolfees,
        firstName,
        lastName,
        parentName,
        parentNumber,
        gender,
        age,
        image: {
            data:req.file.filename
        },
        studentclass
    })
    try {
        res.status(201).json({
            data: student,
        })
    } catch (err) {
        res.json({
            data: err.message
        })
    }
}

exports.getclass = async (req, res) => {
    const getclassName = await Studentmodel.findOne({ studentclass: req.params.className })
    try {
        res.json({
            getclassName
        })
    } catch (err) {
        res.json({
            data: err.message
        })
    }
}

exports.classess = async (req, res) => {
    const getclassName = await Studentmodel.findOne({ studentclass })
    try {
        res.json({
            getclassName
        })
    } catch (err) {
        res.json({
            data: err.message
        })
    }
}