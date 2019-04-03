const StudentBook = require('./studentBook');
const hyf_students = new StudentBook();
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
//app.use(express.json());
app.use(bodyParser.json());
app.use(router);
const port = process.env.PORT || 8001;
app.get('/', (req, res) => res.send('Welcome to our server'));

app.get('/HYF', (req, res) => res.send('HYF api'));

router.route('/HYF/students')
    .get((req, res) => {
        if (req.query.name) {
            const student = hyf_students.getStudentInfoByName(req.query.name);
            if (!student) return res.status(404).send('Student not found...')
            res.send(student);
        } else if (req.query.classId) {
            const student = hyf_students.getListByClassId(req.query.classId);
            if (!student) return res.status(404).send('Class not found...')
            res.send(student);
        } else {
            res.send(hyf_students.getList());
        }
    })

    /* app.get('/HYF/students/:classId', (req, res) => {
        console.log(`/HYF/students/${req.params.classId}`);
        console.log(req.query);
    
        const student = hyf_students.getListByClassId(req.params.classId);
        if (!student) return res.status(404).send('Class not found...')
        res.send(student);
    }); */

    .post((req, res) => {

        const student = hyf_students.addNewStudent(req.body);
            if (!student) return res.status(404).send('Invalid student data...')
            res.send(student);
    })

    .put((req, res) => {
        const student = hyf_students.editStudentInfo(req.body);
        if (!student) return res.status(404).send('Student not found...')
            res.send(student);
    })

    .delete((req, res) => {
        const student = hyf_students.removeStudent(req.query.name);
        if (!student) return res.status(404).send('Student not found...')
            res.send(student);
    });

app.listen(port, () => console.log(`Listening on port ${port}...`));