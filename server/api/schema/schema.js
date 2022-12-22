const Test = require("../models/Test");
const Client = require("../models/Client");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

// const ClientType = new GraphQLObjectType({
//   name: "Client",
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     email: { type: GraphQLString },
//     phone: { type: GraphQLString },
//   }),
// });

// const ProjectType = new GraphQLObjectType({
//   name: "Project",
//   fields: () => ({
//     id: { type: GraphQLID },
//     IBR: { type: GraphQLString },
//     description: { type: GraphQLString },
//     status: { type: GraphQLString },
//     client: {
//       type: ClientType,
//       resolve(parent, args) {
//         return Test.findById(parent.clientId);
//       },
//     },
//   }),
// });

// const RootQuery = new GraphQLObjectType({
//   name: "RootQueryType",
//   fields: {
//     clients: {
//       type: GraphQLList(ClientType),
//       resolve(parent, args) {
//         return Client.find({});
//       },
//     },
//     client: {
//       type: ClientType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         return Client.findById(args.id);
//       },
//     },
//     test: {
//       type: GraphQLList(ProjectType),
//       resolve(parent, args) {
//         return Test.find();
//       },
//     },
//     project: {
//       type: ProjectType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         return Test.findById(args.id);
//       },
//     },
//   },
// });

const TestType = new GraphQLObjectType({
  name: "Test",
  fields: () => ({
    id: { type: GraphQLID },
    IPR: { type: GraphQLString },
    Designation: { type: GraphQLString },
    Status: { type: GraphQLString },
    Number: { type: GraphQLString },
    Office: { type: GraphQLString },
    Owner: { type: GraphQLString },
    Brand_name: { type: GraphQLString },
    Nice_classification: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    tests: {
      type: GraphQLList(TestType),
      resolve(parent, args) {
        return Test.find();
      },
    },
    test: {
      type: TestType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Test.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
