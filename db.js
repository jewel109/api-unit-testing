const mongoose = require('mongoose');

// Define a new instance of "MongoMemoryServer" to automatically start server

// For mongodb-memory-server's old version (< 7) use this instead:
// const mongoServer = new MongoMemoryServer();



// Provide connection to a new in-memory database server.
const connect = async () => {
  // Prevent MongooseError: Can't call `openUri()` on
  // an active connection with different connection strings

  // Spin up an actual/real MongoDB server programmatically from node, for testing

   mongoose.connect("mongodb://localhost:27017/api-unit-testing")
   .then(() => console.log("db is connected"))
   .catch(err => console.log(err))
}
// Remove and close the database and server.
const close = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
};

// Remove all data from collections.
const clear = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};

module.exports = {
  connect,
  close,
  clear,
}

