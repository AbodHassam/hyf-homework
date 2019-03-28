const http = require('http');
const StudentBook = require('./studentBook');
const hyf_students = new StudentBook();
const AbdFahmi = { "name": "Abd Fahmi", "classId": '09', "email": "fahmi@mail.com", "phone": "(455) 131-1114" };
const AbodInfo = { "name": "Abod", "classId": '07', "email": "hassam@mail.com", "phone": "(459) 175-8007" };

const server = http.createServer((req, res) => {
    const url = req.url;
    // list of all HYF students
    if (url === '/HYF/students' && req.method === 'GET') {
        console.log('/HYF/students');
        const status = hyf_students.getList();
        if (status) {
            console.log(status);
            res.status = 200;
            res.end(JSON.stringify(status));
        } else {
            res.status = 404;
            res.end('Not found');
        }
    } 
    // list of class(08) students
    else if (url === '/HYF/students/class(08)' && req.method === 'GET') {
        console.log('/HYF/students/class(08)');
        const status = hyf_students.getListByClassId(08);
        if (status) {
            console.log(status);
            res.status = 200;
            res.end(JSON.stringify(status));
        } else {
            res.status = 404;
            res.end('Not found');
        }
    } 
    //Abod's detailed info
    else if (url === '/HYF/students/Abod' && req.method === 'GET') {
        console.log('/HYF/students/Abod');
        const status = hyf_students.getStudentInfoByName("Abod");
        if (status) {
            console.log(status);
            
            res.status = 200;
            res.end(JSON.stringify(status));
        } else {
            res.status = 404;
            res.end('Not found');
        }
    } 
    // Adding (Abd Fahmi) to students list
    else if (url === '/HYF/students/add' && req.method === 'POST') {
        const status = hyf_students.addNewStudent(AbdFahmi);
        if (status) {
            console.log(status);
            
            res.status = 201;
            res.end(JSON.stringify(status));
        } else {
            res.status = 404;
            res.end('Not found');
        }
    } 
    // editing Abod's info
    else if (url === '/HYF/students/edit' && req.method === 'PUT') {
        console.log('/HYF/students/edit');
        const status = hyf_students.editStudentInfo(AbodInfo);
        if (status) {
            console.log(status);
            res.status = 201;
            res.end("Student Information edited for: " + AbodInfo.name);
        } else {
            res.status = 404;
            res.end(AbodInfo.name + ' does not exist');
        }
        
    } 
    // Removing from the list
    else if (url === '/HYF/students/remove' && req.method === 'DELETE') {
        console.log('/HYF/students/remove');
        const status = hyf_students.removeStudent('Bobby');
    
        if (status) {
            res.statusCode = 201;
            res.end('Student deleted from the list');
        } else {
            res.statusCode = 404;
            res.end('Student not found');
        }
    } else {
        res.statusCode = 404;
        res.end('Failed !!!');
    }

    console.log('send respond to client')
})

server.listen(8001, () => {
    console.log('server is running (8001)...');
})
