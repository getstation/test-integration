window.endpoint = null;
window.registrationId = null;

let done = false;

const register = navigator.serviceWorker.register.bind(navigator.serviceWorker);
const ready = navigator.serviceWorker.ready;

function overrideSubscribe(registration) {
  // const native = registration.pushManager.subscribe.bind(registration.pushManager);
  registration.pushManager.subscribe = function(options) {
    console.log('Overriding subscribe');
    return fetch('https://updates.push.services.mozilla.com/v1/webpush/11-TESTING-11/registration', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
      },
      body: JSON.stringify({"token":"11-TESTING-11-11"})
    }).then(function(response) {
      return response.json();
    });
  };
  return registration;
}

navigator.serviceWorker.register = (worker, options) => {
  // return register(`preload.js?worker=${encodeURIComponent(worker)}`, options);
  return register(worker, options).then(registration => {
    console.log('Overriding register');
    if (done) return overrideSubscribe(registration);
    done = true;
    return overrideSubscribe(registration);
  });
};

navigator.serviceWorker.ready = new Promise((resolve, reject) => {
  ready.then(registration => {
    console.log('Overriding ready');
    if (done) return resolve(overrideSubscribe(registration));
    done = true;
    resolve(overrideSubscribe(registration));
  });
});

this.onpush = function (event) {
  console.log(event.data);
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
};

function subscribe() {
  navigator.serviceWorker.register('serviceworker.js');
  return navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe({ userVisibleOnly: true })
      .then(function(subscription) {
        console.log('response', subscription)
        const endpoint = subscription.endpoint;
        if (endpoint.indexOf('https://android.googleapis.com/gcm/send') === 0) {
          const endpointParts = endpoint.split('/');
          window.registrationId = endpointParts[endpointParts.length - 1];
          window.endpoint = 'https://fcm.googleapis.com/fcm/send';
        } else {
          window.registrationId = null;
          window.endpoint = endpoint;
        }
        console.log(endpoint, registrationId);
      })
      .catch(function(e) {
        if (Notification.permission === 'denied') {
          // The user denied the notification permission which
          // means we failed to subscribe and the user will need
          // to manually change the notification permission to
          // subscribe to push messages
          console.warn('Permission for Notifications was denied');
        } else {
          // A problem occurred with the subscription; common reasons
          // include network errors, and lacking gcm_sender_id and/or
          // gcm_user_visible_only in the manifest.
          console.error('Unable to subscribe to push.', e);
        }
      });
  });
}

subscribe();
