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
