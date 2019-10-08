# AST6 Airline Online Service
## Authors
1. [Kunda Wu](mailto:kunda.wu@sjsu.edu)
2. [John McGinley](mailto:johnpatmcginley@gmail.com)
3. [Thong Le](mailto:javawtee@gmail.com)

## Documentations
[Project proposal](https://github.com/javawtee/CS157A-01-Team6/blob/master/Documentations/CS157A-Team6-Project_proposal.docx)<br/>
[Requirement report](https://github.com/javawtee/CS157A-01-Team6/blob/master/Documentations/CS157A-Team6-Requirement_report.docx)
[Database Design](https://github.com/javawtee/CS157A-01-Team6/blob/master/Documentations/CS%20157A-Team6-DB_Design.docx)

#### Our project is in development, so that Apache is not being used
#### Assumed MySQL is set up properly as our setup (create schema and table), or check [this](https://github.com/javawtee/CS157A-01-Team6/tree/master/Setup/mysql)

## How to start (require [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads) installed)

Open cmd (for Windows) or terminal (for Linux-based OS)
```
1. git clone https://github.com/javawtee/CS157A-01-Team6.git <local_repo_name>

```

**Server (Express.js)** <br/>
*Before running server, configure [mysql connector](https://github.com/javawtee/CS157A-01-Team6/blob/master/server/api/connector.js) to match your mysql setup (user, password)*
```
2. cd <local_repo_name>/server
3. npm install
4. npm start
```

**Client (React)**
```
2. cd <local_repo_name>/client
3. npm install
4. npm start
```
Browser will automatically open to http://localhost:3000 or http://127.0.0.1:3000

**Login test** <br/>
User ID and password [here](https://github.com/javawtee/CS157A-01-Team6/blob/master/Setup/mysql/test_login-raw-password.txt)

