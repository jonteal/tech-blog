# The Daily Dev - Tech Blog

<a name="description"></a>
## Description
The purpose of this blog is to be a hub of technology and web development information for developers and coders to have a place to share information about technical concepts, recent advancements, and new technologies. Visitors to the site are able to read and digest the work of others, and if they so wish, can become members and create posts and contribute to the conversation of their community.  


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Video](#video)
- [Screenshots](#screenshots)
- [Links](#links)
- [Resources / Credits](#credits)


<a name="installation"></a>

## Installation
* Clone the repository using:

```
git clone https://github.com/jonteal/tech-blog
```
* Be sure that you are in the current working directory
* Create a .env file. (See below in Usage for how to set up.)
* Install the dependencies (bcrypt, connect-session-sequelize, express-handlebars, express, dotenv, mysql2, and sequelize) by opening the terminal and running...
```
npm install OR npm i
```
* In the terminal, log into the MySql by typing
```
mysql -u root -p
```
* Then type in your password for MySql. Once logged in, you will need to source the schema file in the db folder. In order to do that, type in the following in the terminal and hit enter afterwards. 
```
SOURCE db/schema.sql;
```
* Once the schema file is sourced, type 'exit' in the command line and get out of mysql.
* The next step is to run the seed data in order to populate the database. To do that, run the following in the command line.
```
npm run seed
```
* Next, run the project by typing the following command in the terminal:
```
npm run start OR node server.js OR npm run dev (for nodemon)
```

<a name="usage"></a>

## Usage
* In order to use the application, the user can either run the program on their localhost port or access the application via the deployed Heroku link (included below).

* To access via their localhost port, once they have their server running by following the instructions in the previous section, they just need to go to their localhost:3001 (3001 is the port already in place on the server.js file), and the application will run from there. Note - if using the application via localhost, the user will need to create a .env file and create in order to access the application. In the .env file, they will need the following:

```
DB_NAME=brightideas_db
DB_USER=(user-name)
DB_PASSWORD=(user-password)
```

* To access via the deployed link at Heroku, see link below.

* Once the application is running, the user only needs to sign up with their username and chosen password. Once logged in, they'll be on the homepage, displaying all users' blog posts. From here, they can go view and comment on any blog post simply by clicking the title of a post and being navigated to that post.

* The user can also go to their dashboard where they can create their own blog posts by following the instructions. If they wish, they may delete their own posts at any time as well.  

* At any time, the user can logout of the website. A user does not need to be logged in to read the posts on the site.


<a name="license"></a>

## License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


<a name="contributing"></a>

## How to Contribute
1. [Fork the repo!](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. Create a feature branch:
```
git checkout -b yourname-branch
```
3. Commit changes:
```
git commit -m 'Your changes here'
```
4. Push to the branch:
```
git push origin yourname-branch
```
5. Submit a pull request and wait for it to be approved or denied.

<a name="tests"></a>

## Tests
No tests available at this time.


<a name="questions"></a>

## Questions
If you have any questions or comments, please feel free to contact me by email:

* Jon Jackson - jonjacksonvibes@gmail.com


<a name="video"></a>

## Video

<a name="screenshots"></a>

## Screenshots


#### Login Page
![Screenshot of Login-page](./images/login.png)

#### Home Page
![Screenshot of Homepage](./images/homepage.png)

#### Project Page
![Screenshot of Dashboard](./images/dashboard.png)

#### Blog Post
![Screenshot of Dashboard](./images/blogpost.png)

<a name="links"></a>

## Links
Github Repository: https://github.com/jonteal/tech-blog

Heroku Live Link: Heroku: https://thedailydev.herokuapp.com/


<a name="credits"></a>

## Resources / Credits
This project was authored by: 
* Jon Jackson - https://github.com/jonteal

Development of the project utilized npm dependencies: bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, nodemon, and sequelize.