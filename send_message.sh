#!/usr/bin/env bash

curl --header "Authorization: key=AAAAjdB-Ub8:APA91bHFuSNQi9_KQgscYbUfs-HWOCwEQwzoJ4L9MbgRgd9PZnF3kzyhpLfgmBnm3l3VpA-G7WJErH4U4sQqm19hG6-KLtCScoDs2YYXXCzYrkNW9tVX4hslmkx2pVeRUkrp-46Ykh-B" \
--header "Content-Type: application/json" \
https://android.googleapis.com/gcm/send -d "{\"registration_ids\":[\"enPjDiGmt8o:APA91bFphn-I_vNq6jN4e6x6WcoPGI3vahqp2hHM_GmfrkqSnNZkeoKFIxoPe3NOBkcPprAEWtaFD4Ck0j7x_Z4CNWu8fMyEmxd47MC7UR4ttu18XJaswcZgLl6wpXLqx3Mvc5D0tLvM\"]}"