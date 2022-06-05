import YTPin from "../models/YTPin";
import localStorageDB from "localstoragedb";
import Youtube from '../apis/Youtube'


export default class YTpinsController {

  async createPin(ytpinsData) {
    let check = this.validateYouTubeUrl(ytpinsData.url);
    if (check === true) {
      const videoData = await this.getYTApiData(ytpinsData.url);
      if (videoData !== false) {
        let lib = this.checkDB();
        let pin = lib.queryAll("ytpins", {
          query: { url: ytpinsData.url, user_id: ytpinsData.user_id }
        });
        if (pin.length === 0) {
          let id = lib.insert("ytpins", {
            url: ytpinsData.url, user_id: JSON.parse(sessionStorage.user).ID, fav: ytpinsData.fav,
            thumbnail: videoData.thumbnails.high.url, title: videoData.title, channelTitle: videoData.channelTitle
          });
          lib.commit();
          pin = new YTPin(id, ytpinsData.url, ytpinsData.user_id, ytpinsData.fav)
          return { status: "OK", pin: pin };
        } else {
          return { status: "KO", message: 'Ya tienes un pin con esa URL' };
        }
      }
    } else {
      return { status: 'KO', message: 'No es un formato válido de URL de YouTube' }
    }
  }


  async updatePin(ytpinsData) {
    let cont = true;
    let check = this.validateYouTubeUrl(ytpinsData.url);
    if (check === true) {
      let lib = this.checkDB();
      let actualPin = lib.queryAll("ytpins", {
        query: { ID: ytpinsData.pin_id }
      })[0];
      console.log(actualPin);
      if (actualPin.url !== ytpinsData.url) {
        let pin = lib.queryAll("ytpins", {
          query: { url: ytpinsData.url, user_id: ytpinsData.user_id }
        })[0];
        console.log(pin)
        if (pin !== undefined) {
          cont = false;
        }
      }
      if (cont === true) {
        const videoData = await this.getYTApiData(ytpinsData.url);
        if (videoData !== false) {
          lib.update("ytpins", { ID: ytpinsData.pin_id }, function (row) {
            row.url = ytpinsData.url;
            row.user_id = ytpinsData.user_id;
            row.fav = ytpinsData.fav;
            row.thumbnail = videoData.thumbnails.high.url;
            row.title = videoData.title;
            row.channelTitle = videoData.channelTitle;
            return row;
          });
          lib.commit();
          return { status: "OK" };
        }
      } else {
        return { status: 'KO', message: 'Ya tienes un pin con esta URL' }
      }

    } else {
      console.log("Mal")
      return { status: 'KO', message: 'No es un formato válido de URL de YouTube' }
    }
  }


  deletPin(ytpinsData) {
    let lib = this.checkDB();
    lib.deleteRows("ytpins", { ID: ytpinsData.pin_id });
    lib.commit();
    return { status: "OK" };
  }


  getPinsFromUser(id) {
    let lib = this.checkDB();
    let pins = lib.queryAll("ytpins", {
      query: { user_id: id }
    });
    return pins;
  }

  getPinsFavFromUser(id) {
    let lib = this.checkDB();
    let pins = lib.queryAll("ytpins", {
      query: { user_id: id, fav: true }
    });
    return pins;
  }

  checkDB() {
    var lib = new localStorageDB("ytpins", localStorage);
    if (lib.isNew()) {
      lib.createTable("ytpins", ["url", "user_id", "fav", "thumbnail", "title", "channelTitle"]);
      lib.commit();
    }
    return lib;
  }

  async getYTApiData(video_url) {
    let id = this.getUrlId(video_url);
    if (id !== false) {
      const response = await Youtube.get('/videos', {
        params: {
          id: id
        }
      });
      return response.data.items[0].snippet;
    } else {
      return false;
    }
  }

  /* eslint-disable */
  validateYouTubeUrl(url) {
    if (url !== undefined || url !== '') {
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      var match = url.match(regExp);
      if (match && match[2].length === 11) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  getUrlId(url) {
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : 'false';
  }
}