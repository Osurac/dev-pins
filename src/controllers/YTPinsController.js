import Pin from "../models/Pin";
import localStorageDB from "localstoragedb";

export default class YTpinsController {
    
    createPin(ytpinsData){
        let lib = this.checkDB();
        let pin =  lib.queryAll("ytpins", {
            query: {url: ytpinsData.url, user_id: ytpinsData.user_id}
        });
        if(!pin.url){
            let id = lib.insert("ytpins", {url: ytpinsData.url, user_id: ytpinsData.user_id, fav: ytpinsData.fav});
            lib.commit();
            pin = new Pin(id, ytpinsData.url, ytpinsData.user_id, ytpinsData.fav)
            return {status: "OK", pin: pin};
        }else{
            return {status: "KO", message: 'Ya tienes un pin con esa URL'};
        }
     }
     updatePin(ytpinsData){
      let lib = this.checkDB();
      lib.update("ytpins", {ID: ytpinsData.pin_id}, function(row) {
           row.url = ytpinsData.url;
           row.user_id = ytpinsData.user_id;
           row.fav = ytpinsData.fav;
           return row;
      });
      lib.commit();
      return {status: "OK"};
    }
  
   
     deletPin(ytpinsData){
       let lib = this.checkDB();
       console.log(ytpinsData)
       lib.deleteRows("ytpins", {ID: ytpinsData.pin_id});
       lib.commit();
       return {status: "OK"};
     }

     
     getPinsFromUser(id){
      let lib = this.checkDB();
      let pins = lib.queryAll("ytpins", {
        query: {user_id: id}
      });
      return pins;
     }

     getPinsFavFromUser(id){
      let lib = this.checkDB();
      let pins = lib.queryAll("ytpins", {
        query: {user_id: id, fav: true}
      });
      return pins;
     }
   
    checkDB(){
       var lib = new localStorageDB("ytpins", localStorage);
       if( lib.isNew() ) {
           lib.createTable("ytpins", ["url", "user_id", "fav"]);
           lib.commit();
       }
       return lib;
     }
}