import {User} from './user';

var userList:User[]=[];

export function addUser(user:User){
    userList.push(user);
}

export function getUserById(id:string){
    return userList.filter(u=>u.id===id).pop();
}
export function deleteUser(id:string){ 
    console.log('user: ',userList);
    userList=userList.filter(function (u){
      return u.id!=id;
    })
    console.log('after delete: ',userList);
  }