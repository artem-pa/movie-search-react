import { storageAPI } from "../../constants/constants";

class LocalStorage {
  getStorage() {
    const storage = localStorage.getItem(storageAPI);
    if (!storage) this._createStorage();
    return JSON.parse(storage);
  }

  add(item) {
    const storage = this.getStorage();
    storage.push(item);
    localStorage.setItem(storageAPI, JSON.stringify(storage));
  }

  remove(deleteItem) {
    const storage = this.getStorage();
    const newStorage = storage.filter(item => item.imdbID !== deleteItem.imdbID);
    localStorage.setItem(storageAPI, JSON.stringify(newStorage));
  }

  _createStorage() {
    localStorage.setItem(storageAPI, '[]');
  }
}

export default LocalStorage;