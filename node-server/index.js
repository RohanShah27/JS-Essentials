const express = require("express");
const app = express();
const port = 5000;
const functionList = ["resize", "removeBg"];

app.get("/api/:pattern/image", (req, res) => {
  const { pattern } = req.params;
  const functions = pattern.split("~");

  global.resize = (height, width) => {
    console.log("resize called", height, "<-Height Width ->", width);
  };
  functions.forEach((func) => {
    const functionName = func.split("(")[0];
    // get parameters if any
    const parameters = func.split("(")[1].split(")")[0].split(",");
    if (functionList.includes(functionName)) {
      // calling the function from the global state
      global[functionName](...parameters);
    } else {
      console.log(functionName, " does not exist ");
    }
  });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
