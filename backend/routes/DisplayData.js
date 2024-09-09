const express = require("express");
const router = express.Router();

router.post("/fooddata", (req, res) => {
  try {
    // Ensure global.foodCategory and global.foodDataArray are initialized
    const foodData = global.foodData || []; // Default to empty array if undefined
    const foodCategory = global.foodCategory || []; // Default to empty array if undefined

    // Log to ensure data is being accessed
    console.log("Food Data Array:", foodData);
    console.log("Food Category:", foodCategory);

    // Send response with data
    res.send([foodData, foodCategory]);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Server Error"); // Send a 500 status code for server errors
  }
});

module.exports = router;
