create table user (
  id integer primary key autoincrement,
  username varchar(25),
  password varchar(25),
  phone varchar(15)
);

create table goal (
  id integer primary key autoincrement,
  uid integer references user,
  text varchar(250)
);

create table subgoal (
  id integer primary key autoincrement,
  uid integer references user,
  gid integer references goal,
  text varchar(250),
  active char(1),
  points integer,
  timeToSend char(10)
);
