-- Create new user
insert into user (username, password, phone) values (req.param('username'), req.param('password'), req.param('phone'));

-- Log into user
select id from user where username = req.param('username') and password = req.param('password');

-- Update password
update user set password = req.param('new_password') where username = req.param('username') and password = req.param('old_password');




-- Get all goals
select * from goal where uid = req.param('uid');

-- Get specific goal
select * from goal where uid = req.param('uid') and id = req.param('id');

-- Create new goal
insert into goal (uid, text) values (req.param('uid'), req.param('text'));

-- Remove specific goal
-- remove subgoals first?
delete from goal where uid = req.param('uid') and id = req.param('id');

-- Update goal text
update goal set text = req.param('new_text') where uid = req.param('uid') and id = req.param('id');




-- Get all subgoals
select * from subgoal where uid = req.param('uid');

-- Get all subgoals for a particular goal
select * from subgoal where uid = req.param('uid') and gid = req.param('gid');

-- Get specific subgoal
select * from subgoal where uid = req.param('uid') and gid = req.param('gid') and id = req.param('id');

-- Create new goal
insert into subgoal (uid, gid, text, active, points, timeToSend) values (req.param('uid'), req.param('gid'), req.param('text'), req.param('active'), req.param('points'), req.param('timeToSend'));

-- Remove specific subgoal
delete from subgoal where uid = req.param('uid') and id = req.param('id');

-- Update subgoal text
update subgoal set text = req.param('new_text') where uid = req.param('uid') and id = req.param('id');

-- Update subgoal to active or inactive
update subgoal set active = req.param('new_active') where uid = req.param('uid') and id = req.param('id');

-- Update subgoal points
update subgoal set points = req.param('new_points') where uid = req.param('uid') and id = req.param('id');

-- Update subgoal timeToSend
update subgoal set timeToSend = req.param('new_timeToSend') where uid = req.param('uid') and id = req.param('id');
