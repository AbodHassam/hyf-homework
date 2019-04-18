USE hyf_db2;
# drop table student_course;

# creating student table
CREATE TABLE student(
id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
name varchar(30) NOT NULL,
email varchar(30) NOT NULL,
phone varchar(30) NOT NULL,
class_id int(10) unsigned NOT NULL
);

# creating course table
CREATE TABLE course(
id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
course_name varchar(50) NOT NULL,
description text NULL DEFAULT NULL,
duration int(50)
);

# student_course table, many to many
CREATE TABLE student_course(
student_id int(10) unsigned NOT NULL,
course_id int(10) unsigned NOT NULL,
PRIMARY KEY (`student_id`, `course_id`),
CONSTRAINT fk_student FOREIGN KEY (student_id) REFERENCES student(id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES course(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Students
insert into student (id, name, email, phone, class_id) values (1, 'Abod', 'abod@mail.com', '(263) 972-6043', '08');
insert into student (id, name, email, phone, class_id) values (2, 'Sana', 'sana@maio.com', '(745) 285-6338', '08');
insert into student (id, name, email, phone, class_id) values (3, 'Badr', 'badr@mail.com', '(971) 436-6442', '07');
insert into student (id, name, email, phone, class_id) values (4, 'Yana', 'yana@maio.com', '(457) 527-9154', '07');
insert into student (id, name, email, phone, class_id) values (5, 'Ben', 'ben@mail.com', '(259) 245-5777', '06');
insert into student (id, name, email, phone, class_id) values (6, 'Abd', 'abd@mail.com', '(939) 553-4886', '09');

-- Courses
insert into course (id, course_name, description, duration) values (1, 'html css', 'basics of HTML and CSS', 3);
insert into course (id, course_name, description, duration) values (2, 'JS part 1', 'Java Script I', 3);
insert into course (id, course_name, description, duration) values (3, 'JS part 2', 'Java Script II', 3);
insert into course (id, course_name, description, duration) values (4, 'JS part 3', 'Java Script III', 3);
insert into course (id, course_name, description, duration) values (5, 'Node.js', 'REST API', 5);
insert into course (id, course_name, description, duration) values (6, 'Databases', 'basics of databases', 3);

-- Students-Courses
insert into student_course (student_id, course_id) values (1, 6);
insert into student_course (student_id, course_id) values (2, 6);
insert into student_course (student_id, course_id) values (3, 4);
insert into student_course (student_id, course_id) values (4, 1);
insert into student_course (student_id, course_id) values (5, 2);