class StudentBook {
  constructor(students) {
    this.students = students;
  }

  //Method that can return list is all HYF students
  getList() {
    return this.students;
  }

  //Method that can return a filtered list of students by class name
  getListByClassId(classId) {
    return this.students.filter(student => student.classId == classId)
  }

  //Method that can return one student's detailed information
  getStudentInfo(name) {
    let selectedStudent = this.students.find(student => student.name.toLowerCase().includes(name.toLowerCase()));
    if (selectedStudent) {
      return selectedStudent;
    }
    else {
      console.log('The student does not exist');
    }
  }

  //Method that can add a new student to HYF
  addANewStudent(newStudent) {
    if (this.students.find(student => student.name === newStudent.name))
      return newStudent.name + " already exists in Student List!";
    else {
      return this.students.push(newStudent) , newStudent.name + " has been added to the Student List!";
      
    }
  }

  //Method that can edit existing student information
  editStudentInfo(studentInfo) {
    this.students.map(student => {
      if (student.name === studentInfo.name) {
        student.classId = studentInfo.classId;
        student.email = studentInfo.email;
        student.phone = studentInfo.phone;

        return "Student Information edited for: " + student.name;
      }
      else {
        return "The student does not exist";
      }
    });
  }
  //6. A method that can remove a student
  removeStudent(name) {
    let studentToRemove = this.students.filter(student => student.name != name);
    //console.log(studentToRemove)
    return studentToRemove


  }
}

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

const hyf_students = new StudentBook(hyfStudentsArray);
let AbdFahmi = { "name": "Abd Fahmi", "classId": '09', "email": "fahmi@mail.com", "phone": "(455) 131-1114" };
let AbodInfo = { "name": "Abod", "classId": '07', "email": "hassam@mail.com", "phone": "(459) 175-8007" };
//Step 1
console.log("getting list of all HYF students");
console.log(hyf_students.getList());

//Step 2
console.log("getting HYF students (class 08)");
console.log(hyf_students.getListByClassId(08));

//Step 3
console.log("getting Abod's detailed information");
console.log(hyf_students.getStudentInfo("Abod"));

//Step 4
console.log("adding AbdFahmi to HYF");
console.log(hyf_students.addANewStudent(AbdFahmi));

//Step 5
console.log("edit Abod's information");
console.log(hyf_students.editStudentInfo(AbodInfo), AbodInfo.name + ' info has been edited!!!');
// To verify
console.log(hyf_students.getList());

//Step 6
console.log("Removing Bobby from HYF");
console.log(hyf_students.removeStudent('Bobby'));