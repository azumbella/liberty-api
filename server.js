const app = require("./app");

PORT = process.env.PORT || 4700;
app.listen(PORT, () => {
  console.log("Server Running on port " + PORT);
});
