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
  
  class StudentBook {
    constructor() {
        this.students = hyfStudentsArray
    }
  
    //1. Method that can return list is all HYF students
    getList() {
        return this.students;
    }
  
    //2. Method that can return a filtered list of students by class name
    getListByClassId(classId) {
        return this.students.filter(student => student.classId == classId)
    }
  
    //3. Method that can return one student's detailed information
    getStudentInfoByName(name) {
        let selectedStudent = this.students.find(student => student.name.toLowerCase().includes(name.toLowerCase()));
        if (selectedStudent) {
            return selectedStudent;
        }
        else {
            console.log('The student does not exist');
        }
    }
  
    //4. Method that can add a new student to HYF
    addNewStudent(newStudent) {
        let isStudentNew = true;
        let isStudentvalid = true;
        this.students.forEach((student) => {
            if (newStudent.name.toLowerCase() === student.name.toLowerCase()) {
                return isStudentNew = false;
            }else if (newStudent.name.length <= 3 || newStudent.classId.length > 2) {
                return isStudentvalid = false;
            }
        })
  
        if (isStudentNew && isStudentvalid) {
            this.students.push(newStudent);
            return newStudent.name + ' has been added to the Students List!';
        }else if (!isStudentvalid) {
            return "Student info is invalid!";
        } else {
            return newStudent.name + " already exists in Students List!";
        }
  
    }
  
    //5. Method that updates info of student
    editStudentInfo(newInfo) {
        let selectedStudent = this.students.find((student) => {
            if (student.name.includes(newInfo.name)) {
                return student;
            }
        })
        selectedStudent.classId = newInfo.classId;
        selectedStudent.email = newInfo.email;
        selectedStudent.phone = newInfo.phone;
        console.log(newInfo.name+"'s info changed");
  
        return selectedStudent;
    }
  
    //6. A method that can remove a student
    removeStudent(name) {
        const index = this.students.findIndex((student) => {
            return student.name === name;
        });
        if (index !== -1) {
            this.students.splice(index, 1);
            return name + " has been removed from the Students List!";
        }else{
            console.log('The student already does not exist');
        };
    }
  
  }
  
  module.exports = StudentBook;