import Pin from "../models/Pin";
import localStorageDB from "localstoragedb";

export default class PodPinsController {
    
    createPin(podpinsData){
        let lib = this.checkDB();
        let pin =  lib.queryAll("podpins", {
            query: {url: podpinsData.url, user_id: podpinsData.user_id}
        });
        if(!pin.url){
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
       lib.update("podpins", {id: podpinsData.id}, function(row) {
            row.url = podpinsData.id;
            row.user_id = podpinsData.user_id;
            row.fav = podpinsData.fav;
            return row;
       });
       lib.commit();
       return {status: "OK"};
     }
   
     deletPin(podpinsData){
       let lib = this.checkDB();
       lib.deleteRows("podpins", {user_id: podpinsData.user_id, url: podpinsData.url});
       lib.commit();
       return {status: "OK"};
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