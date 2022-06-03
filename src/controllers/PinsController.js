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
       lib.update("pins", {ID: pinsData.pin_id}, function(row) {
            row.url = pinsData.url;
            row.user_id = pinsData.user_id;
            row.fav = pinsData.fav;
            return row;
       });
       lib.commit();
       return {status: "OK"};
     }
   
     deletPin(pinsData){
       let lib = this.checkDB();
       lib.deleteRows("pins", {ID: pinsData.pin_id});
       lib.commit();
       return {status: "OK"};
     }

     getPinsFromUser(id){
      let lib = this.checkDB();
      let pins = lib.queryAll("pins", {
        query: {user_id: id}
      });
      return pins;
     }

     getPinsFavFromUser(id){
      let lib = this.checkDB();
      let pins = lib.queryAll("pins", {
        query: {user_id: id, fav: true}
      });
      return pins;
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