const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const indexPublicPath = path.join(__dirname, "../public");
const outputPath = path.join(__dirname, "output/output.json");
const welcomeFile = path.join(__dirname, "../");
const outputFile = path.join(__dirname, "output/");
const port = process.env.PORT;

//To render client sie files
app.use(express.static(indexPublicPath));

app.get("/parse", (req, res) => {
  const response = convertData(req.query.data);
  if (response) {
    //To handle error cases
    return res.send(response);
  }
});

app.get("", (req, res) => {
  return res.sendFile("welcome.html", { root: welcomeFile });
});

app.get("/output", (req, res) => {
  return res.sendFile("output.json", { root: outputFile });
});

const convertData = (data) => {
  try {
    // const storedData = fs.readFileSync(outputPath).toString();
    fs.writeFileSync(outputPath, data);
  } catch (e) {
    return { error: e };
  }
};

app.listen(port, () => console.log("Server started"));
