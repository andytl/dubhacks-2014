Motivation for you to complete your own personal goals.


To create a new database in SQLite that can store data for this application, run the following command:

```shell
sqlite3 db < pavedb.sql
```

To run various commands from httpie on the terminal:

Create new account with username pete, password pw, and phone 123456
```shell
http --form POST localhost:3000/user username=pete password=pw phone=123456
```

Login to an account with username pete, password pw
```shell
http GET localhost:3000/user username=pete password=pw
```

Update password to pw on uid 123
```shell
http --form PUT localhost:3000/user/123/password new_password=pw
```

Delete account 123
```shell
http DELETE localhost:3000/user/123
```


Create new goal for user 123 with text 'This is my goal'
```shell
http --form POST localhost:3000/user/123/goal text='This is my goal'
```

Lookup single goal for user 16, goal 7
```shell
http GET localhost:3000/user/16/goal/7
```

Lookup all goals for user 16
```shell
http GET localhost:3000/user/16/goal
```

Delete goal 7 for user 16
```shell
http DELETE localhost:3000/user/16/goal/7
```

Update goal 6 for user 16
```shell
http --form PUT localhost:3000/user/16/goal/6 new_text='This is my new goal text'
```


Create new subgoal for goal 6 for user 16
```shell
http --form POST localhost:3000/user/16/goal/6/subgoal text='SUBGOAL' active=1 points=5 timeToSend='2014-10-18'
```

Lookup single subgoal for user 16, goal 6, subgoal 1
```shell
http GET localhost:3000/user/16/goal/6/subgoal/1
```

Lookup all subgoals for user 16, goal 6
```shell
http GET localhost:3000/user/16/goal/6/subgoal
```

Delete subgoal 2 for user 16, goal 6
```shell
http DELETE localhost:3000/user/16/goal/6/subgoal/2
```

Updated subgoal 1 for user 16, goal 6. Any combination of the fields can be updated, if you want certain fields to remain unchanged, do not list them in the request body. Each [] is optional.
```shell
http --form PUT localhost:3000/user/16/goal/6/subgoal/1 [text='TEXT'] [active=1] [points=100] [timeToSend='2014-10-18']
```
