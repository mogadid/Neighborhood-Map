class Helper {
  static baseURL() {
    return 'https://api.foursquare.com/v2';
  }
  static auth() {
    const keys = {
      client_id: 'L2WY1X20CZA1IVYN0HK5ERTWBTKN0POC3MSUL32EX4TPZHZX',
      client_secret: 'DLW1NSK01YQ1AXXUJT452NUQGGJJPWY2JZFFWUCWHKGDFNBR',
      v: '20190515'
    };
    return Object.keys(keys)
      .map(key => `${key}=${keys[key]}`)
      .join('&');
  }

  static headers() {
    return {
      Accept: 'application/json'
    };
  }

  static urlBuilder(urlParams) {
    if (!urlParams) {
      return '';
    }
    return Object.keys(urlParams)
      .map(key => `${key}=${urlParams[key]}`)
      .join('&');
  }

  static simpleFetch(endpoint, method, urlParams) {
    let requestData = {
      method,
      headers: Helper.headers()
    };
    return fetch(
      `${Helper.baseURL()}${endpoint}?${Helper.auth()}&${Helper.urlBuilder(
        urlParams
      )}`,
      requestData
    )
      .then(Helper.checkStatus)
      .then(response => response.json())
      .catch(error => {
        alert(
          'An error occurred while trying to fetch data from Foursquare - Error Code of: ' +
            error.response
        );
      });
  }
}

export default class SquareAPI {
  static search(urlParams) {
    return Helper.simpleFetch('/venues/search', 'GET', urlParams);
  }
  static getVenueDetails(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}`, 'GET');
  }
  static getVenuePhotos(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, 'GET');
  }
}
