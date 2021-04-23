const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const DirectoryType = require('./directory_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    directory_path: {
      type: DirectoryType
    }
  }
});

module.exports = RootQueryType;