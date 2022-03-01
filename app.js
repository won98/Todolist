const express = require("express");
//const cors = require("cors");
const app = express();
const port = 3000;
const Router = require("./routes");

//app.use(cors());
app.use(express.json());
app.use("/", Router.listRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
