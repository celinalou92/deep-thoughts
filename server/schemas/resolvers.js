// creeated this after setting up our query in typeDefs.js
const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      }
    }
  };
  
  module.exports = resolvers;