const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
  try {
    let modelExists = await models[modelName].db.db.listCollections({
      name: collectionName
    }).toArray()

    if (modelExists.length) {
      await db.dropCollection(collectionName);
      console.log(`${collectionName} collection dropped`)
    }
  } catch (err) {
    console.error(`Error dropping ${collectionName} collection: `, err);
    throw err;
  }
};

