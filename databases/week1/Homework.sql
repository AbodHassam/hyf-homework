SHOW TABLES;

select count(*) from task;

select count(*) from task where task.due_date is NULL;

select task.id, task.title, task.description, status.name from task join status on task.status_id = status.id where  status.name like "%done%";

select task.id, task.title, task.description, status.name from task join status on task.status_id = status.id where  status.name not like '%done%';

select * from task order by created DESC;

select * from task order by created DESC limit 1;

select title, due_date from task where title like '%database%' or description like '%database%';

select task.title, status.name from task join status on task.status_id = status.id;

select status.name, count(*) from status join task on status.id = task.status_id group by status.name;

select status.name, count(*) from status join task on status.id = task.status_id group by status.name order by count(*) DESC;
