import Pin from "../models/Pin";
import localStorageDB from "localstoragedb";

export default class PodPinsController {
    
    createPin(podpinsData){
        let lib = this.checkDB();
        let pin =  lib.queryAll("podpins", {
            query: {url: podpinsData.url, user_id: podpinsData.user_id}
        });
        if(pin.length === 0){
            let id = lib.insert("podpins", {url: podpinsData.url, user_id: podpinsData.user_id, fav: podpinsData.fav});
            lib.commit();
            pin = new Pin(id, podpinsData.url, podpinsData.user_id, podpinsData.fav)
            return {status: "OK", pin: pin};
        }else{
            return {status: "KO", message: 'Ya tienes un pin con esa URL'};
        }
     }

     updatePin(podpinsData){
      let lib = this.checkDB();
      lib.update("podpins", {ID: podpinsData.pin_id}, function(row) {
           row.url = podpinsData.url;
           row.user_id = podpinsData.user_id;
           row.fav = podpinsData.fav;
           return row;
      });
      lib.commit();
      return {status: "OK"};
    }
  
     deletPin(podpinsData){
       let lib = this.checkDB();
       lib.deleteRows("podpins", {ID: podpinsData.pin_id});
       lib.commit();
       return {status: "OK"};
     }
     
     getPinsFromUser(id){
      let lib = this.checkDB();
      let pins = lib.queryAll("podpins", {
        query: {user_id: id}
      });
      return pins;
     }

     getPinsFavFromUser(id){
      let lib = this.checkDB();
      let pins = lib.queryAll("podpins", {
        query: {user_id: id, fav: true}
      });
      return pins;
     }
   
    checkDB(){
       var lib = new localStorageDB("podpins", localStorage);
       if( lib.isNew() ) {
           lib.createTable("podpins", ["url", "user_id", "fav"]);
           lib.commit();
       }
       return lib;
     }
}