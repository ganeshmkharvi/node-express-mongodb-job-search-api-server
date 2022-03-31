<p align="center">
  <h3 align="center">Job Search API</h3>
  <p align="center">
    <a href="https://github.com/ganeshmkharvi/node-express-mongodb-job-search-api-server/issues">Report Bug </a>
    ·
    <a href="https://github.com/ganeshmkharvi/node-express-mongodb-job-search-api-server/issues"> Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

### What's inside this repo?

- Express Server configured to accept JSON request.
- Apis to create services, checkouts and retrieve services.
- Production standard structuring of the application.
- High SoC (feature based).


### Built With

- [Node.js]() - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express.js]() - Minimal and flexible Node.js web application framework
- [MongoDB]() - Cross-platform document-oriented database program

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps :

### Prerequisites

To run this project, you'll need to have the following installed:

- Node.js : [https://nodejs.org](https://nodejs.org)

- npm :
  ```sh
  npm install npm@latest -g
  ```
- MongoDB : [https://mongodb.com](https://mongodb.com) <br>

> You can also use MongoDB Atlas if you prefer.
> <br>

### Installation

1. Clone the repo :
   ```sh
   git clone https://github.com/ganeshmkharvi/node-express-mongodb-job-search-api-server.git
   ```
2. Install dependencies (use `sudo` if required) :

   ```sh
   npm install
   ```

3. Create `.env` file and configure :

   ```JS
   PORT = <PORT>
   MONGO_DB_URL = <MONGO_DB_URL> 
   ```
   E.g. MONGO_DB_URL = mongodb://localhost:27017/jobsearchdb
   Here, jobsearchdb is the database name.

4. Start the server :
   ```sh
   npm start
   ```
5. Run http://localhost:3001/api/services api in postman only once. You will get all the details in the postman collection added in this repo.
