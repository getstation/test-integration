const _Notif = window.Notification;

$(function () {
  $('#button').click(function () {
    const notif = new window.Notification('Notify me');
  })

  $('#button2').click(function () {
    const notif = new _Notif('Notify me 2');
  })

  $('#button3').click(function () {
    const notif = new window.Notification('Nofify me and close in 10sec');
    setTimeout(() => notif.close(), 10000)
  })

  $('#button4').click(function () {
    const myHeaders = new Headers();

    myHeaders.append('Authorization', 'key=AAAAjdB-Ub8:APA91bHFuSNQi9_KQgscYbUfs-HWOCwEQwzoJ4L9MbgRgd9PZnF3kzyhpLfgmBnm3l3VpA-G7WJErH4U4sQqm19hG6-KLtCScoDs2YYXXCzYrkNW9tVX4hslmkx2pVeRUkrp-46Ykh-B');
    myHeaders.append('Content-Type', 'application/json');


    var myInit = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({
        registration_ids: [window.registrationId],
        notification: {
          title: 'test',
          body: 'test body'
        }
      })
    };

    fetch(window.endpoint, myInit).then(function(response) {
      console.log('notification sent');
      return response.json();
    }).then(response => {
      console.log(response);
    });
  });

  $('#alertButton').click(function () {
    window.alert('Alert popup');
  });
})
