#!/usr/bin/env bash

KEY="AAAAjdB-Ub8:APA91bHFuSNQi9_KQgscYbUfs-HWOCwEQwzoJ4L9MbgRgd9PZnF3kzyhpLfgmBnm3l3VpA-G7WJErH4U4sQqm19hG6-KLtCScoDs2YYXXCzYrkNW9tVX4hslmkx2pVeRUkrp-46Ykh-B"

curl -i -o - -H "Authorization: key=${KEY}" https://android.clients.google.com/c2dm/register3 -d 'app=standalone&device=12345a123'