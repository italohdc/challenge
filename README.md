# Code Challenge

## How to run

### To run the server
```
# Go to the server folder
cd api

# Build a Docker container
docker build -t challenge-api .

# Run the built container
docker run --env AWS_DYNAMODB_KEY=key
 -p 3000:3000 challenge-api
```

### To run the app
```
# Go to the app folder
cd app

# Build a Docker container
docker build -t challenge-app .

# Run the built container
docker run -p 80:80 challenge-app

# You can then access the app in your
# browser via localhost:80
```

### App routes

- Interface #01: `localhost/`

- Interface #02 (admin): `localhost/admin`

## Project decisions

### API
For the Node.js API, I used the framework **Express.js**.

In order to speed up making the API, I used [express-generator](https://expressjs.com/pt-br/starter/generator.html)  to create a boilerplate. After that, I modified the file structure based on this MVC boilerplate [How  to write a production-ready Node and Express app](https://www.freecodecamp.org/news/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c/).

I setup ESLint for code formatting and to avoid prevent errors. For Unit Testing, I setup Jest and configured an adapter to use a local droppable database for tests. 


### Database
To store data, I used **DynamoDB**. It is an Amazon NoSQL database offered as a service. Some advantages are: it’s easy to setup; depending on how you structured your data, it’s fast to make queries.

The models are organized as following:

#### music

| id            |
|---------------|
| partition_key |

#### user

| nickname      | hasVoted |
|---------------|----------|
| partition_key | Boolean  |

#### votes

| music_id      | user_nickname | position | 
|---------------|---------------|----------|
| partition_key | sort_key      | Number   |


### App

For the app, I used **Vue.js**. I first intended to use React, but as I’m not familiar, and I didn’t have a lot of time to study more about it, I decided to use a technology I’m familiar with.

I also used **Vuex** for state management and **Buefy** (based on **Bulma**) as a component library.
