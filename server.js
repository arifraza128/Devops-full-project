const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
