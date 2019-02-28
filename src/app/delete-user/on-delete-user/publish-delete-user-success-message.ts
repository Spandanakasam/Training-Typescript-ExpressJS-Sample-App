import * as bus from 'pubsub-js';
import { DeleteUser, DeleteUserSuccess } from '../../message';
import { User } from '../../store/user';
import * as store from '../../store';
import { Base_Api_Url } from '../../settings';
import * as $ from 'jquery';

bus.subscribe(DeleteUser, deleteUserFromDatabase);

export function deleteUserFromDatabase(msg:string, id:string){
  $.ajax({
    url: (`${Base_Api_Url}user/${id}`),
    type: 'Delete',
    data: id,
    success: (deleteFromStoreAndPublish),
    error: (onFail)
  }
  )};

function deleteFromStoreAndPublish(id:string){
  console.log('success',id);
  //store.deleteUser(id);
  bus.publishSync(DeleteUserSuccess,id);
}
function onFail(message:any){
  console.log("fail",message);
}