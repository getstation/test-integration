function deserializeUrlParams(queryString) {
  return new Map(queryString.split('&').map(function(keyValuePair) {
    const splits = keyValuePair.split('=');
    const key = decodeURIComponent(splits[0]);
    let value = decodeURIComponent(splits[1]);
    if (value.indexOf(',') >= 0) {
      value = value.split(',');
    }

    return [key, value];
  }));
}

self.addEventListener('install', function(event) {
  console.log('installed')
  const native = self.registration.showNotification.bind(self.registration);
  self.registration.showNotification = (notificationTitle, notificationOptions) => {
    console.log('GO');
    return native(notificationTitle, notificationOptions)
  };
});

const params = deserializeUrlParams(location.search.substring(1));
self.importScripts(params.get('worker'));