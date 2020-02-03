<template>
  <b-menu class="references-menu">
    <b-menu-list label="References">
      <b-menu-item
        v-for="(link, index) in links"
        :key="index"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <template slot="label">
          <h1 class="reference-title">{{ link.title }}</h1>
          <p class="reference-subtitle">{{ link.subtitle }}</p>
        </template>
      </b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  name: 'References',
  data() {
    return {
      links: [
        {
          url: 'https://italolelis.com',
          title: 'My personal blog',
          subtitle: 'Blog',
        },
        {
          url: 'https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6',
          title: 'Testing NodeJs/Express API with Jest and Supertest',
          subtitle: 'Dev.to',
        },
        {
          url: 'https://medium.com/the-node-js-collection/simple-server-side-cache-for-express-js-with-node-js-45ff296ca0f0',
          title: 'Simple server side cache for Express.js with Node.js',
          subtitle: 'Medium',
        },
        {
          url: 'https://www.freecodecamp.org/news/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c/',
          title: 'How to write a production-ready Node and Express app',
          subtitle: 'freeCodeCamp',
        },
        {
          url: 'https://hackernoon.com/how-to-use-eslint-in-node-js-applications-cc4b2298ce55',
          title: 'How to use ESLint in Node.js Applications?',
          subtitle: 'Hackernoon',
        },
        {
          url: 'https://hackernoon.com/how-to-develop-a-boilerplate-for-api-with-node-js-express-and-mongodb-4c771ae1c2df',
          title: 'How to Develop a Boilerplate for API with Node.js, Express, and MongoDB',
          subtitle: 'Hackernoon',
        },
        {
          url: 'https://jestjs.io/docs/en/dynamodb',
          title: 'Using Jest with DynamoDB',
          subtitle: 'Jest',
        },
        {
          url: 'https://medium.com/@Keithweaver_/using-aws-dynamodb-using-node-js-fd17cf1724e0',
          title: 'Using AWS DynamoDB with Node.js',
          subtitle: 'Medium',
        },
        {
          url: 'https://stackoverflow.com/questions/31039948/configuring-region-in-node-js-aws-sdk',
          title: 'Configuring region in Node.js AWS SDK',
          subtitle: 'StackOverflow',
        },
        {
          url: 'https://medium.com/signiant-engineering/real-time-aggregation-with-dynamodb-streams-f93547cfb244',
          title: 'Real-Time Aggregation with DynamoDB Streams',
          subtitle: 'Medium Signiant',
        },
        {
          url: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.CreateTable.html',
          title: 'Creating a Table',
          subtitle: 'Amazon DynamoDB Docs',
        },
        {
          url: 'https://stackoverflow.com/questions/10005939/how-do-i-consume-the-json-post-data-in-an-express-application',
          title: 'How do I consume the JSON POST data in an Express application',
          subtitle: 'StackOverflow',
        },
        {
          url: 'https://medium.com/@tiangolo/react-in-docker-with-nginx-built-with-multi-stage-docker-builds-including-testing-8cc49d6ec305',
          title: 'React in Docker with Nginx, built with multi-stage Docker builds',
          subtitle: 'Medium',
        },
        {
          url: 'https://stackoverflow.com/questions/1069666/sorting-object-property-by-values',
          title: 'Sorting object property by values',
          subtitle: 'StackOverflow',
        },
        {
          url: 'https://blog.logrocket.com/axios-or-fetch-api/',
          title: 'Axios or fetch(): Which should you use?',
          subtitle: 'LogRocket',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.references-menu {
  padding: 2rem;
}

.reference-title {
  font-size: 1em;
}

.reference-subtitle {
  font-size: 0.8em;
}
</style>
