import * as bus from 'pubsub-js';
import { AddUser, AddUserSuccess } from '../../message';
import { User } from '../../store/user';
import * as store from '../../store';
import * as $ from 'jquery';
import { Base_Api_Url } from '../../settings';

bus.subscribe(AddUser, AddUserInDataBase);

export function AddUserInDataBase(msg: string, user: User) {
  // make server call
  // i need url
  // i need jquery to post
  $.post(`${Base_Api_Url}user`, user)
    .done(addToStoreAndPublish)
    .fail(onFail);
}

function addToStoreAndPublish(user: User) {
  console.log("success", user);
  store.addUser(user);
  bus.publishSync(AddUserSuccess, user.id);
}

function onFail(message: any) {
  console.log("fail", message);
}
