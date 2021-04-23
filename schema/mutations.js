const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;
const DirectoryType = require('./types/directory_type');
const listFiles = require('../services/listFiles')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    directory_path: {
      type: DirectoryType,
      args: {
        path: { type: GraphQLString }
      },
      resolve(parentValue, args, req) {
        return {
          info: listFiles(args)
        }
      }
    }
  }
})

module.exports = mutation;