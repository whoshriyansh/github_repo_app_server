
# GitHub lookalike App Server/Backend

This backend server powers a GitHub lookalike application, allowing users to sign in with their GitHub accounts, search for repositories, and like repositories. It leverages the GitHub API for repository data and uses Passport for GitHub authentication.



## Features

- GitHub Authentication: Users can sign in using their GitHub accounts, facilitated by the Passport library for secure OAuth authentication.
- Repository Search: Users can search for repositories directly from GitHub, with results fetched and displayed in the application.
- Repository Likes: Users can like repositories, with functionality integrated to manage and store these interactions.
## Tech Stack and Libraries

**Server:** Node, Express, Mongoose, JsonWebToken, Bcrypt JS,, Passport, nodemon

**Database:** MongoDB
## Run on your System

Clone the project

```bash
git clone https://github.com/whoshriyansh/github_repo_app_server server
```

Go to the project directory

```bash
cd server
```

Install dependencies

```bash
npm install
```

Start the server in Development Env.

```bash
npm run dev
```

Start the server in Production Env.

```bash
npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`  

`PORT` 

`GITHUB_API_KEY`

`GITHUB_CLIENT_ID`

`GITHUB_CLIENT_SECRET`

`CLIENT_BASE_URL`
## Authors

- [@whoshriyansh](https://www.linkedin.com/in/whoshriyansh/)
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-orange?style=for-the-badge&logo=ko-fi&logoColor=white)](https://whoshriyansh.vercel.app/)

[![linkedin](https://img.shields.io/badge/LinkedIn-0A66C2.svg?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/whoshriyansh/)

[![twitter](https://img.shields.io/badge/X-000000.svg?style=for-the-badge&logo=X&logoColor=white)](https://x.com/whoshriyansh)

[![Instagram](https://img.shields.io/badge/Instagram-E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/whoshriyansh)
