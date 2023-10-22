create database admin;
use admin;

create database testing;
use testing;
CREATE TABLE user_data (id INT AUTO_INCREMENT PRIMARY KEY, user_input VARCHAR(255));
select * from user_data;
delete from user_data where id=4;
drop table user_data;

create database sih;
use sih;

create table doc(id INT PRIMARY KEY,appt date,sym varchar(2000),prescription varchar(2000),labt varchar(2000),casef varchar (200));
select * from doc;
SELECT * FROM mdoc;

alter table doc add gname varchar(300);
create table mdoc(id INT PRIMARY KEY,name varchar(200),appt date,sym varchar(2000),prescription varchar(2000),labt varchar(2000),casef varchar(200));
ALTER TABLE mdoc
alter column  name
set default 'User';

delete from mdoc where id=201;
create table jobs(pname varchar(300),abhaid int PRIMARY KEY,timing int,action varchar(300))
;
create table patient(pname varchar(300),abhaid int PRIMARY KEY,addr varchar(3000),age int,gender varchar(300),prevhis varchar(3000));
select * from patient;
drop table jobs;
select * from jobs;
set SQL_SAFE_UPDATES=0;