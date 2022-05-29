import User from "../models/User";
import localStorageDB from "localstoragedb";

export default class UsersController {
    
    createUser(userData){
        let lib = this.checkDB();
        let user =  lib.queryAll("users", {
            query: {email: userData.email}
        });
        if(!user.username){
            let id = lib.insert("users", {username: userData.username, pwd: userData.pwd, name: userData.name, email: userData.email});
            lib.commit();
            user = new User(id, userData.username, userData.pwd, userData.name, userData.email)
            return {status: "OK", user: user};
        }else{
            return {status: "KO", message: 'El usuario ya existe'};
        }
     }
   
     updateUser(userData){
       let lib = this.checkDB();
       lib.update("users", {username: userData.username}, function(row) {
         row.name = userData.name;
         row.pwd = userData.pwd;
         row.email = userData.email;
         // the update callback function returns to the modified record
          return row;
       });
       lib.commit();
       return true;
     }
   
     deleteUser(userData){
       let lib = this.checkDB();
       lib.deleteRows("users", {username: userData.username});
       lib.commit();
       return true;
     }

     login(userData){
        let lib = this.checkDB();
        let user = lib.queryAll("users", {
            query: {email: userData.email, pwd: userData.pwd}
        });
        if(user !== null){
            return {status: "OK", user: user};
        }else{
            return {status: "KO", message: 'No existe el usuario.'};
        }
     }
   
    checkDB(){
       var lib = new localStorageDB("users", localStorage);
       if( lib.isNew() ) {
           lib.createTable("users", ["username", "pwd", "name", "email"]);
           lib.commit();
       }
       return lib;
     }
}