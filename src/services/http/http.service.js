import { API, apikey } from '../../constants/constants';

class Http {
  async loadAll(searchQuery, props, callback) {
    let url = this._getUrl(Object.assign({ s: searchQuery }, props));
    await this._fetchGet(url).then(callback)
  }

  async loadOne(id, callback) {
    let url = this._getUrl({i: id, plot: 'full'});
    await this._fetchGet(url).then(callback)
  }

  async _fetchGet(url) {
    return fetch(url, { method: 'GET' })
      .then(this._parseJSON)
      .catch(error => {throw error});
  }

  _parseJSON(response) {
    return response.json();
  }

  _getUrl(props) {
    let url = API;
    for (const key in props) {
      url += `${key}=${props[key]}&`
    }
    return `${url}apikey=${apikey}`;
  }
}

export default Http;