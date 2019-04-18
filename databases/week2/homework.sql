USE hyf_db2;
# drop table student_course;
show tables;

# selecting students taking Databases course
SELECT student.name, student.email, student.class_id, course.course_name, course.duration
FROM student 
JOIN student_course ON student.id = student_course.student_id
JOIN course ON course.id = student_course.course_id
WHERE class_id = 8;
    
# remove one column from one of the tables
ALTER TABLE student DROP email;
SELECT * FROM student;

# change the data type for one column in one of the tables
ALTER TABLE course
MODIFY COLUMN description varchar(100);

# add a new column to one of the tables with a default value.
ALTER TABLE course 
ADD created year
DEFAULT 2018;
SELECT * FROM course;

/*  ALTER TABLE student 
ADD email varchar(100) default 'ex@mail.com';  */

SET SQL_SAFE_UPDATES=0;
# modify two entries (rows) in one of the tables
UPDATE student
SET email = 'a-hassam@outlook.com', class_id = 07
WHERE name = 'Abod';

UPDATE student
SET email = 'sana@mail.com', class_id = 08
WHERE id = 2;

SELECT * FROM student;

# delete two entries in one of the tables
DELETE 
FROM student
WHERE name = 'Abod';

# add an index to one of the columns in one of the tables
SHOW INDEX FROM student;
CREATE INDEX idx_name 
ON student (name);
