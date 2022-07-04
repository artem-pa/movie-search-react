import Http from "./http/http.service";
import LocalStorage from "./localStorage/local-storage.service";
import Scroll from "./scroll/scroll.service";

const http = new Http();
const scroll = new Scroll();
const storage = new LocalStorage();

export { http, scroll, storage };