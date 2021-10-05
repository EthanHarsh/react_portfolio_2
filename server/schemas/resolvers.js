const Project = require('../models/projectModel');

const resolvers = {
  Query: {
    projects: async () => {
      return await Project.find();
    },
    features: async () => {
      return await Project.find({featured: '1'}).exec();
    },
  }
};

module.exports = resolvers;