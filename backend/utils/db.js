const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

const fetchData = async () => {
  await connectDb();
  try {
    // Fetching data from 'foodData' collection
    const foodDataCollection = mongoose.connection.db.collection("foodData");
    global.foodData = await foodDataCollection.find({}).toArray();

    // Fetching data from 'foodCategory' collection
    const foodCategoryCollection =
      mongoose.connection.db.collection("foodCategory");
    global.foodCategory = await foodCategoryCollection.find({}).toArray();
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

// Call fetchData to populate global variables
fetchData();

module.exports = connectDb;
