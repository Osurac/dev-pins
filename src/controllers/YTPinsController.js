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
       lib.update("ytpins", {id: ytpinsData.id}, function(row) {
            row.url = ytpinsData.id;
            row.user_id = ytpinsData.user_id;
            row.fav = ytpinsData.fav;
            return row;
       });
       lib.commit();
       return {status: "OK"};
     }
   
     deletPin(ytpinsData){
       let lib = this.checkDB();
       lib.deleteRows("ytpins", {user_id: ytpinsData.user_id, url: ytpinsData.url});
       lib.commit();
       return {status: "OK"};
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