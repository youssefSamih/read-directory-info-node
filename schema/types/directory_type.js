const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLFloat
} = graphql;
// birthtimeMs: GraphQLFloat,
// atime: scalar Date,
const DirectoryType = new GraphQLObjectType({
  name: 'DirectoryType',
  fields: {
    info: { type: new GraphQLList(new GraphQLObjectType({
      name: 'info',
      fields: {
        path: {type: GraphQLString},
        size: {type: GraphQLString}
      }
    }))}
  }
});

module.exports = DirectoryType;