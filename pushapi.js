window.endpoint = null;
window.registrationId = null;

const register = navigator.serviceWorker.register.bind(navigator.serviceWorker);

navigator.serviceWorker.register = (worker, options) => {
  return register(`preload.js?worker=${encodeURIComponent(worker)}`, options);
};

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
        const endpoint = subscription.endpoint;
        if (endpoint.indexOf('https://android.googleapis.com/gcm/send') === 0) {
          const endpointParts = endpoint.split('/');
          window.registrationId = endpointParts[endpointParts.length - 1];
        }
        window.endpoint = 'https://android.googleapis.com/gcm/send';
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
