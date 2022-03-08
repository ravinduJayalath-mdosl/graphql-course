const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');

const  app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true 
}));

app.listen(3997, () => {
    console.log('Listening to port 3997...');
});
