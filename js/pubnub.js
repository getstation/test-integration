function init() {
    pubnub = new PubNub({
        subscribeKey : 'sub-c-6a8a1b7a-9321-11e7-8816-ca7de4c8b978'
    });

    pubnub.addListener({
        status: function(statusEvent) {
            if (statusEvent.category === "PNConnectedCategory") {
                console.log('StatusEvent PNConnectedCategory');
            }
        },
        message: function(message) {
            console.log("New Message!!", message);
        },
        presence: function(presenceEvent) {
            console.log("presenceEvent", presenceEvent);
        }
    });
    pubnub.subscribe({
        channels: ['test_channel'],
    });

    console.log("Subscribing..");
};

init();