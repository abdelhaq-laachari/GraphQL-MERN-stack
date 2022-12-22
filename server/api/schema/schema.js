const Test = require("../models/Test");
const Client = require("../models/Client");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    fullName: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
  }),
});

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
    clients: {
      type: GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
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

// Mutation 

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add Client
    addClient: {
      type: ClientType,
      args: {
        fullName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phoneNumber: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let client = new Client({
          fullName: args.fullName,
          email: args.email,
          phoneNumber: args.phoneNumber,
        });
        return client.save();
      }  
    },
    // Update Client
    updateClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLID },
        fullName: { type: GraphQLString },
        email: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Client.findByIdAndUpdate(
          args.id,
          {
            $set: {
              fullName: args.fullName,
              email: args.email,
              phoneNumber: args.phoneNumber,
            },
          },
          { new: true }
        );
      },
    },
    // Delete Client
    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Client.findByIdAndDelete(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
