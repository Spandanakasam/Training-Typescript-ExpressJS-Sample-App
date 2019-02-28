const uuid = require("uuid/v1");
import { User } from "../../store/user";
import * as bus from "pubsub-js";
import { DeleteUser } from "../../message";
import * as $ from "jquery";
//import { userList } from "../../store";

$(function() {
  listen1();
});
export function listen1() {
  $("table").on("click", publishDeleteUserMessage);
}
export function publishDeleteUserMessage(event: any) {
  //  if(!$(this).hasClass('btn')) {return;}

  if (event.target.className.indexOf("btn") < 0) {
    return;
  }
  //console.log(`delete me `);
  const id = event.target.getAttribute("data-id");

  bus.publishSync(DeleteUser, id);
  event.target.closest("tr").remove();
}

export const DeleteUserModule = { listen1, publishDeleteUserMessage };