#!/usr/bin/env bash

PUSH_SERVER="https://updates.push.services.mozilla.com"
SENDER_ID="609088328127"
REGISTRATION_ENDPOINT="/v1/webpush/${SENDER_ID}/registration"
SERVER="${PUSH_SERVER}${REGISTRATION_ENDPOINT}"

curl -i -o - -H "Accept: application/json" -H "Authorization: Bearer $2" -X POST -d '{}' "${SERVER}/$1/subscription"
