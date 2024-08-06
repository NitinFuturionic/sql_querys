-- create table contact (
-- 	id serial primary key,
-- 	Name varchar(50),
-- 	Mobile_No varchar (15)
-- )


 -- select * from contact where id=1;


-- select name ,count(*) from contact group by name having count(*)>1;
-- select distinct name  from contact;

-- update contact set name='rahul'
-- where Mobile_No='893745862';

-- select *  from contact;

-- SELECT * FROM contact WHERE name = 'rahul';
-- Delete from contact where Id not in (select min(Id) from contact group by name );

-- insert into contact (name , mobile_no) values('nitin','9325997861'),('nitin','9325997861'),('nitin','9325997861');

-- delete from contact where id not in (select min(id) from contact  group by name);
-- select * from contact;

-- create table userInfo (
-- 	id serial primary key,
-- 	Name varchar(50),
-- 	LastName varchar(50),
-- 	Mobile_No varchar (15),
-- 	Location varchar(20)
-- )
-- insert into userInfo (Name,LastName, Mobile_No,Location) values ('Nitin','Chavan','9325997861','Solapur'),('Madelle','A','893745862','HYD'),
-- ('Emalee','B','893745863','HYD'),('Misti','C','893745864','HYD'),('Frasquito','D','893745865','HYD'),	('Davida','E','893745874','HYD'),('Bryn','F','893745875','HYD'),
-- ('Sabine','G','893745876','HYD'),('Lucinda','H','893745891','HYD'),('Marketa','I','893745893','HYD'),('Brander','j','893745894','HYD')



-- select * from userInfo AS u
-- Inner join contact AS c
-- ON c.name =u.name;

-- select u.name ,u.location,c.mobile_no userInfo 
-- from userInfo AS u
-- Inner join contact AS c
-- ON c.name =u.name;



-- select * from contact AS c
-- LEFT JOIN userInfo AS u
-- ON u.mobile_nO=c.mobile_no;


-- select *from contact AS c
-- RIGHT JOIN UserInfo AS u
-- ON u.mobile_nO=c.mobile_no;

-- select * from contact AS c
-- FULL OUTER JOIN userInfo AS u
-- ON c.name=u.name;


 -- select *from userInfo;
-- insert into userInfo (name ,lastname,mobile_no,location) values ('nitin','chavan','9325997861','Solapur');



-- create table professor(
-- 	ID int,
-- 	Name varchar(20),
-- 	Salary int 
-- );

-- create table teaches(
-- 	course_id int,
--     prof_id int,
--     course_name varchar(20)

-- );

-- insert into professor(ID,Name ,Salary)values (1,'Rohan',57000),(2,'Aryan',45000),(3,'Arpit',60000),
-- (4,'Harsh',50000),(5,'Tara',55000);

-- insert into teaches(course_id,prof_id ,course_name)values (1,1,'Marathi'),(1,3,'Hindi'),(2,4,'telugu'),
-- (2,5,'English'), (1,2,'Hindu');


-- select * from professor as p
-- inner join teaches as t
-- on p.ID=t.prof_id;

-- select  * from professor as p
-- left join teaches as t
-- on p.ID=t.prof_id;

-- select  * from professor as p
-- Right join teaches as t
-- on p.ID=t.prof_id;

-- select  * from professor as p
-- Full outer join teaches as t
-- on p.ID=t.prof_id;

-- select p.ID, p.Salary,t.course_name
-- from professor as p
-- join teaches as t
-- on p.ID=t.prof_id;

-- one to many

-- create table author (
-- 	AuthorsID int primary key ,
-- 	AuthorsName varchar (20)
-- )


-- insert into author (AuthorsID,AuthorsName) values (1,'J.K. Rowling'),
-- (2,'George R.R. Martin')

-- create table Books (
-- 	BookID INT PRIMARY KEY,
--     BookTitle VARCHAR(200),
--     AuthorID INT,
-- 	Foreign  key(AuthorID) references author(AuthorsID)	
-- )



-- insert into Books (BookID, BookTitle, AuthorID) VALUES
-- (1, 'Harry Potter and the Philosophers Stone',1),
-- (2, 'Harry Potter and the Chamber of Secrets',1),
-- (3, 'A Game of Thrones',2),
-- (4, 'A Clash of Kings',2);

-- select *from Books;
-- select *from authors;

-- SELECT author.AuthorsName, Books.BookTitle
-- FROM author
-- JOIN Books ON author.AuthorsID = Books.AuthorID;
-- -- DROP TABLE author ;


-- Many to many 

-- create table students(
-- 	Sid serial Primary key,
-- 	SName varchar(20)
-- )
-- insert into students (SName) values  ('Nitin'),('Rahul'),('Shirish')


-- create table courses(
-- 	Cid serial primary key,
-- 	CName varchar(20)
-- )

-- insert into courses (CName) values ('Marathi'),('english'),('Hindi')

-- create table enrollment(
-- 	Eid serial primary key ,
-- 	Sid Integer ,
-- 	Cid Integer,
-- 	Foreign  key (Sid) references students(Sid),
-- 	Foreign key (Cid) references courses(Cid)
-- )
-- insert into enrollment (Sid ,Cid)values (1,1),(1,2),(2,1),(3,1),(3,3)

-- select students.Sname ,courses.CName
-- from enrollment as e
-- join students on  e.Eid=students.Sid
-- join courses on e.Eid=courses.Cid
-- where courses.CName='Marathi'

-- select * from enrollment;

-- SELECT courses.CName, students.SName AS student_name
-- FROM enrollment
-- JOIN courses ON enrollment.Cid = courses.Cid
-- JOIN students ON enrollment.Sid = students.Sid
-- WHERE students.SName = 'Nitin';

-- one to one

-- create table EntrollmentsOneToOne (
-- 	EID serial primary key ,
-- 	Sid Integer,
-- 	Cid Integer,
-- 	foreign key (Sid) references students (Sid),
-- 	foreign key (Cid) references courses (Cid)
-- )
-- insert into EntrollmentsOneToOne (Sid ,Cid) Values (1,2),(2,1),(3,3)

-- select  courses.CName ,students.SName 
-- from EntrollmentsOneToOne as e
-- join students on e.EID=students.Sid
-- join courses on e.EID=courses.Cid;


-- fetch last record in tabel 
-- select * from contact where id =(select max(id) from contact)

---fetch first record in tabel 
-- select *from contact where id =(select min(id) from contact );

-- create table employees(
-- 	EID serial primary key,
-- 	E_Name varchar(20),
-- 	Last_Name varchar(20),
-- 	Gender varchar (5),
-- 	Date_Of_Joing date
-- )

-- insert into employees (E_Name,Last_Name,Gender,Date_Of_Joing) values ('Nitin','Chavan','M','2024-08-05'),
-- ('Rahul','Chavan','M','2020-05-10'),('Shirish','Yeldandi','M','2024-03-15'),('Akashy','Chavan','M','2024-01-20')


-- select *from employees;


-- sort by date in descending order 
-- select *from employees order by Date_Of_joing desc;

-- sort by date in ascending order 
-- select *from employees order by Date_Of_joing asc;

-- fetch by latest date 
-- select *from employees where Date_Of_joing=(select max(Date_Of_joing) from employees )


-- fetch by oldest date 
-- select * from employees where Date_Of_joing=(select min(Date_Of_joing) from employees )


-- Subqueries
-- create table payment(
-- 	ID serial primary key ,
-- 	Name varchar(20),
-- 	amount integer
-- )
-- insert into payment(Name ,amount) values ('Nitin',600),('Rahul',800),('shirish',200),('raju',100),('sonu',300),('rajesh',250)

-- select avg (amount) from payment

-- select amount from payment where amount>(select avg (amount) from payment)
-- select amount from payment where amount=(select min(amount)from payment)
-- select amount from payment where amount=(select mix(amount)from payment)
-- select * from payment
-- select  count(*) from payment where amount>(select avg (amount)  from payment) 

-- Indexes
-- 1)BTREE index

-- create index firstIndex on payment (amount)
-- select name from payment;
-- name =082
-- create index nameindex on payment(name)
-- select name from payment;
-- name =078
-- select * from payment;


-- 2) unique index

-- create unique index UN on payment(ID);

-- 3)composite index one than one column

-- create index indexName on payment(ID,Name,amount)

-- 4) function based index 

-- create index indexName on payment (UPPER(name )
-- select* from payment where  upper(name) ='NITIN' ;

-- create index indexName on payment (Lower(name )
-- select* from payment where  lower(name) ='nitin' ;

-- 5)Bitmap index
-- ex: gender 


-- window function 
-- over() :- define the window which set on rows we have to applies  functionns 1)partition by 2)order by 3) rows

-- create table data (
-- 	new_ID integer
-- )
-- insert into data (new_ID) values (100),(500),(200),(300),(500),(400),(400),(600),(400),(700),(800)

-- select new_ID,
-- row_number() over (order by new_ID) as "row_number",
-- rank () over (order by new_ID) as "Rank",
-- dense_rank() over (order by new_ID) as "dense_rank",
-- percent_rank() over (order by new_ID) as "percent_rank"
-- from data 

-- rank ():-
-- new id        rank 
-- 100             1
-- 200           	2
-- 300         	3
-- 400         	4  If duplicate numbers occur, the ranking will be assigned based on the entries, and it will skip ranks for the number of repeated entries accordingly.
-- 400	            4
-- 400         	4
-- 500	            7
-- 500          	7
-- 600         	9
-- 700	            10
-- 800          	11

-- dense_rank:- If duplicate numbers occur, the ranking will be assigned based on the entries. The dense_rank function ensures that no ranks are skipped, even when there are ties.

-- percent_rank():- function calculates the relative rank of a row within a group of rows, ranging from 0 to 1, by dividing the rank of the row minus one by the total number of rows minus one.
