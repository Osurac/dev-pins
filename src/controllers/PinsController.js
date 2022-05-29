import Pin from "../models/Pin";
import localStorageDB from "localstoragedb";

export default class PinsController {
    
    createPin(pinsData){
        let lib = this.checkDB();
        let pin =  lib.queryAll("pins", {
            query: {url: pinsData.url, user_id: pinsData.user_id}
        });
        if(!pin.url){
            let id = lib.insert("pins", {url: pinsData.url, user_id: pinsData.user_id, fav: pinsData.fav});
            lib.commit();
            pin = new Pin(id, pinsData.url, pinsData.user_id, pinsData.fav)
            return {status: "OK", pin: pin};
        }else{
            return {status: "KO", message: 'Ya tienes un pin con esa URL'};
        }
     }
   
     updatePin(pinsData){
       let lib = this.checkDB();
       lib.update("pins", {id: pinsData.id}, function(row) {
            row.url = pinsData.id;
            row.user_id = pinsData.user_id;
            row.fav = pinsData.fav;
            return row;
       });
       lib.commit();
       return {status: "OK", pin: pin};
     }
   
     deletPin(pinsData){
       let lib = this.checkDB();
       lib.deleteRows("pins", {user_id: pinsData.user_id, url: pinsData.url});
       lib.commit();
       return {status: "OK"};
     }
   
    checkDB(){
       var lib = new localStorageDB("pins", localStorage);
       if( lib.isNew() ) {
           lib.createTable("pins", ["url", "user_id", "fav"]);
           lib.commit();
       }
       return lib;
     }
}