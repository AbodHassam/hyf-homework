use hyf_db3;
SET NAMES utf8mb4;

CREATE TABLE user (
id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
name varchar(30) NOT NULL,
email varchar(30) NOT NULL,
phone varchar(30) NOT NULL
)ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE podcast (
id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
title varchar(30) NOT NULL,
content varchar(30) NOT NULL,
episodes int(10) NOT NULL
)ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE user_podcast (
user_id int(10) unsigned NOT NULL,
podcast_id int(10) unsigned NOT NULL,
PRIMARY KEY (`user_id`, `podcast_id`),
CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT fk_podcast FOREIGN KEY (podcast_id) REFERENCES podcast(id) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

INSERT INTO `user` VALUE (1,'Abod','a-hassam@outlook.com','(263) 972-6043');
INSERT INTO `user` VALUE (2,'Sana','sana@mail.com','(457) 527-9154');
INSERT INTO `user` VALUE (3,'Badr','badr@mail.com','(259) 245-5777');
INSERT INTO `user` VALUE (4,'Abd','abd@mail.com','(939) 553-4886');

INSERT INTO `podcast` VALUE (1,"Truth's Table","sharing perspectives","77");
INSERT INTO `podcast` VALUE (2,"Middle east","politics in the Middle East","34");
INSERT INTO `podcast` VALUE (3,"BBC","world news","1808");
INSERT INTO `podcast` VALUE (4,"Bein Sport","sport news","354");

insert into user_podcast (user_id, podcast_id) values (1, 2);
insert into user_podcast (user_id, podcast_id) values (2, 2);
insert into user_podcast (user_id, podcast_id) values (3, 1);
insert into user_podcast (user_id, podcast_id) values (3, 4);
insert into user_podcast (user_id, podcast_id) values (4, 1);
insert into user_podcast (user_id, podcast_id) values (4, 2);
insert into user_podcast (user_id, podcast_id) values (4, 3);
insert into user_podcast (user_id, podcast_id) values (4, 4);
#insert into user_podcast values (3, 2);

