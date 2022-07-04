import { storageAPI } from "../../constants/constants";

class LocalStorage {
  getStorage() {
    const storage = localStorage.getItem(storageAPI);
    if (!storage) this._createStorage();
    return JSON.parse(storage);
  }

  add(item) {
    let storage = new Set(this.getStorage());
    console.log(storage);
    storage.add(item);
    console.log(storage);
    localStorage.setItem(storageAPI, JSON.stringify([...storage]));
    console.log(storage);
  }

  remove(item) {
    let storage = new Set(this.getStorage());
    storage.delete(item);
    localStorage.setItem(storageAPI, JSON.stringify([...storage]));
  }


  _createStorage() {
    localStorage.setItem(storageAPI, '[]');
  }
}

export default LocalStorage;