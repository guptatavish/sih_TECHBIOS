# sih_TECHBIOS

pip install virtualenv 

python -m venv env

env\Scripts\activate

(inside env)

pip install flask
pip install pymysql

after doing all this open MySQL workbench on your pc and simply 
create the database and tables using the following commands

create database sih;
use sih;
create table doc(id INT PRIMARY KEY,appt date,sym varchar(2000),prescription varchar(2000),labt varchar(2000),casef varchar (200));
create table mdoc(id INT PRIMARY KEY,name varchar(200),appt date,sym varchar(2000),prescription varchar(2000),labt varchar(2000),casef varchar(200));

insert any values you like in the workbench itself


after doing this in the virtual env 
just type python app.py

dont forget to alter your MYSQL password in the code
