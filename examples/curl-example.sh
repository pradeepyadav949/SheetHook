#!/bin/bash

WEBHOOK_URL="https://script.google.com/macros/s/Aereeeeeeekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk8zetE7lhwBk-A-eeeeee/exec"
AUTH_TOKEN="YOUR_SECRET_TOKEN"

curl -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -H "Authorization: ${AUTH_TOKEN}" \
  -d '{
    "name": "Alice",
    "email": "alice@example.com",
    "message": "Hi from curl!"
  }'
