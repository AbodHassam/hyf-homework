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
      return this.students.push(newStudent), newStudent.name + " has been added to the Student List!";

    }
  }

  //Method that can edit existing student information
  editStudentInfo(studentInfo) {
    this.students.find(student => {
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
  /*removeStudent(name) {
    let studentToRemove = this.students.filter(student => student.name != name);
    //console.log(studentToRemove)
    return this.students = studentToRemove;
  }*/
    removeStudent(name) {
        this.students.find(student =>{
          if ( student.name === name){
            return this.students.splice(this.students.indexOf(name), 1), name + " has been removed from the Student List!";
          }
          else {
            return name + " already removed from Student List!";
          }
        })
    };
}


//const hyf_students = new StudentBook(hyfStudentsArray);


module.exports = StudentBook;