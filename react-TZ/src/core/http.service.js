export const http = {
  _host: 'https://hacker-news.firebaseio.com/v0/',

  get(url, options) {
    const defaultOptions = {
      method: 'GET',
    };
    return this._fetch(url, {
      ...options,
      ...defaultOptions,
    });
  },

  _fetch(url, options) {
    const input = `${this._host}${url}`;
    const body = JSON.stringify(options.body);
    const requestOptions = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body,
    };

    return fetch(input, requestOptions)
      .then((res) => {
        if (res.status >= 200 && res.status <= 300) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .catch((err) => Promise.reject(err));
  },
};
