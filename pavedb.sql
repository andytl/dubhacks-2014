create table user (
  id integer,
  username varchar(25),
  password varchar(25),
  primary key (id)
);

create table goal (
  id integer,
  uid integer references user,
  text varchar(250),
  primary key (id)
);

create table subgoal (
  id integer,
  gid integer references goal,
  text varchar(250),
  active char(1),
  points integer,
  timeToSend char(10),
  primary key (id)
);
