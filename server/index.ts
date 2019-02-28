import * as express from "express";
const { PORT } = require("./server-port");
import { userRoutes } from "./routes/user-route";
import * as bodyParser from "body-parser";

const app = express();
// required to call from other ports
app.use((req: any, res: any, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // this header is a fix for all type of verbs.  
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
//body parser will help to read the body from request message and put it in express request body object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
userRoutes(app);

app
  .get("/", (req: any, res: any) =>
    res.send(`Node and express server is running on port ${PORT}`)
  )
  .listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
