const chalk = require("chalk");
import { db } from "../db";
import { log } from "../logger";
import { Request } from "express";

// avoid using any to get this kind of typo error got it?yes you ar all set....ok. it is optional I just watned to differenciate my messages so i put colors got itwhile debugging it helps so that u know which are ur logs.ok thank you :) please explain this to all Sure they also noticed while you are doingok bye then . dilip told us share our resumes with you . just let me knoe when you are free send me email roopkt@gmail.com ok
export const deleteUserFromDb = (req: Request, res: any) => {
  // fetch the same parameter name as u mentioned in routing arguments
  // make sure u use params.
  const userId = req.params.userId;
  log("req param", req.params);
  log(chalk.blue("deleting userId", userId));
  log(chalk.green(`fetching user from request`), userId);
  log(`deleting user from db`, userId);
  db.userList.pop(userId); //replace with mongo
  log(`sending user deleted to client`, userId);
  res.json(userId);
};
