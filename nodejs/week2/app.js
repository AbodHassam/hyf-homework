//HYF students array
let hyfStudentsArray = [
    { "name": "Hakki", "classId": '08', "email": "hakki@mail.com", "phone": "(263) 972-6043" },
    { "name": "Keerthika", "classId": '08', "email": "keerthika@mail.com", "phone": "(745) 285-6338" },
    { "name": "Rieko", "classId": '08', "email": "Rieko@mail.com", "phone": "(971) 436-6442" },
    { "name": "Sheila", "classId": '08', "email": "sheila@gmail.com", "phone": "(457) 527-9154" },
    { "name": "Virgeen", "classId": '08', "email": "virgeen@mail.com", "phone": "(259) 245-5777" },
    { "name": "Abod", "classId": '08', "email": "abod@mail.com", "phone": "(939) 553-4886" },
    { "name": "afshin", "classId": '08', "email": "afshin@mail.com", "phone": "(548) 420-7322" },
    { "name": "Gordon", "classId": '07', "email": "gordon@mail.com", "phone": "(970) 482-1032" },
    { "name": "Mitchell", "classId": '07', "email": "Mitchell@mail.com", "phone": "(480) 835-5405" },
    { "name": "Agnes", "classId": '07', "email": "Agnes@mail.com", "phone": "(781) 210-4210" },
    { "name": "Viola", "classId": '07', "email": "Viola@mail.com", "phone": "(857) 583-3775" },
    { "name": "Charles", "classId": '07', "email": "Charles@mail.com", "phone": "(380) 305-4996" },
    { "name": "Billy", "classId": '06', "email": "Billy@mail.com", "phone": "(236) 304-9435" },
    { "name": "Lou", "classId": '06', "email": "Lou@mail.com", "phone": "(503) 932-2128" },
    { "name": "Bobby", "classId": '06', "email": "Bobby@mail.com", "phone": "(482) 478-5946" },
    { "name": "Carlos", "classId": '06', "email": "Carlos@mail.com", "phone": "(945) 779-2726" },
    { "name": "Alfred", "classId": '09', "email": "Alfred@mail.com", "phone": "(746) 843-2346" },
    { "name": "Teresa", "classId": '09', "email": "Teresa@mail.com", "phone": "(288) 240-2845" },
    { "name": "Wayne", "classId": '09', "email": "Wayne@mail.com", "phone": "(833) 911-1457" },
    { "name": "Luella", "classId": '09', "email": "Luella@mail.com", "phone": "(455) 680-1114" }];

    const AbdFahmi = { "name": "Abd Fahmi", "classId": '09', "email": "fahmi@mail.com", "phone": "(455) 131-1114" };
    const AbodInfo = { "name": "Abod", "classId": '07', "email": "hassam@mail.com", "phone": "(459) 175-8007" };
    
    const http = require('http');
    const StudentBook = require('./hyf_students');
    const server = http.createServer((req, res) => {
    const url = req.url;
    
    //console.log(studentBook);
    const hyf_students = new StudentBook(hyfStudentsArray);
    if (url === '/getList') {

        res.end(JSON.stringify(hyf_students.getList()));
    }
    else if (url === '/getListByClassId') {

        res.end(JSON.stringify(hyf_students.getListByClassId(08)));
    }
    else if (url === '/getStudentInfo') {

        res.end(JSON.stringify(hyf_students.getStudentInfo("Abod")));
    }
    else if (url === '/addANewStudent') {

        res.end(JSON.stringify(hyf_students.addANewStudent(AbdFahmi)));
    }
    else if (url === '/editStudentInfo') {

        res.end(JSON.stringify(hyf_students.editStudentInfo(AbodInfo)));
    }
    else if (url === '/removeStudent') {

        res.end(JSON.stringify(hyf_students.removeStudent('Bobby')));
    }

    else {
        res.end('Not found')
    }
    res.end('Not found')
    console.log('We need to send res to client');

});
server.listen(8006, () => {
    console.log('Your server is running at port : 8006');
});