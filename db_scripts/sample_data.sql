insert into user (username, password, phone) values ('pete', 'password1', '2067947051');
insert into user (username, password, phone) values ('babak', 'password2', '2067947051');
insert into user (username, password, phone) values ('andy', 'password3', '2067947051');
insert into user (username, password, phone) values ('radu', 'password4', '2067947051');
insert into user (username, password, phone) values ('steven', 'password5', '2067947051');

insert into goal (uid, text) values ((select id from user where username = 'pete'), 'Fitness'); 
insert into goal (uid, text) values ((select id from user where username = 'pete'), 'Pass my classes'); 
insert into goal (uid, text) values ((select id from user where username = 'babak'), 'Learn Python'); 
insert into goal (uid, text) values ((select id from user where username = 'andy'), 'Learn Spanish'); 
insert into goal (uid, text) values ((select id from user where username = 'radu'), 'Learn how to play Piano'); 
insert into goal (uid, text) values ((select id from user where username = 'steven'), 'Get accepted to grad school'); 

