const express = require("express");
const app = express();
const db = require("./db");
const persionRoute = require("./routes/personroutes");
const MenuItemRoute = require("./routes/MenuItem");

const bodyparset = require("body-parser");
app.use(bodyparset.json());

app.get("/", function (req, res) {
  res.send("well come my hotel how can i help you ??");
});
app.get("/bps", (req, res) => {
  res.send("welcome to bps hotel");
});
app.use("/person", persionRoute);
app.use("/MenuItem", MenuItemRoute);

app.listen(3000, () => {
  console.log("server is running on port 3000");
}); // This port Number Show the Api
