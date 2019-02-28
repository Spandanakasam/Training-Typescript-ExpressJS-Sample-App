import { addUserToDb } from "../controllers/add-user-to-db";
import { db } from "../db";
import { deleteUserFromDb } from "../controllers/delete-user-from-db";

export const userRoutes = (app: any) => {
  // no need to return app
  app
    .route("/api/user")
    .post(addUserToDb)
    .get((req: any, res: any) => res.send("Get is done"));

  // delete path is /api/user/:userId ( Since we have userId as parameter here therefore we have to fetch the same)
  app.route("/api/user/:userId").delete(deleteUserFromDb);
};
// export const userRoutes = (app: any) =>
//   app
//     .route("/api/user")
//     .post(addUserToDb)
//     .get((req: any, res: any) => {
//       // const userId = req.params.userId;
//       // const user = db.userList.filter((u:any)=>u.id===userId).pop();
//       // res.json(user);
//       res.send("Get is done");
//     });
//     export const userRoutes1 = (app: any) =>
//     app
//       .route("/api/user/user.id")
//       .delete(deleteUserFromDb)
