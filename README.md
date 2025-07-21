# SheetHook – Use Google Sheets as a Webhook Endpoint

- Store JSON data into Google Sheets using a serverless webhook powered by Google Apps Script. Ideal for forms, no-code tools, automation, and more.
- Use Google Sheets like a backend – accept POST requests and log data automatically. This project shows how to make Google Sheets act as a webhook that dynamically handles any JSON fields sent to it.

## 🌟 Features

- Accepts `POST` JSON requests
- Matches Sheet headers with submitted keys
- Timestamp logging
- Required field validation
- Optional token protection

---

## 🛠️ Setup

1. Create a Google Sheet
2. (Optional) Add any initial headers in Row 1, or leave Row 1 blank.  
   **Headers will be created and updated automatically from incoming JSON keys.**
3. Go to **Extensions → Apps Script**
4. Paste the code from [`appscript/code.js`](appscript/code.js)
5. Deploy → **Web App**
   - Execute as: **Me**
   - Access: **Anyone**
   - Click Deploy and copy your webhook URL (it will look like:  
     `https://script.google.com/macros/s/Aereeeeeeekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk8zetE7lhwBk-A-eeeeee/exec`)

---

## 📤 Example API Call

```bash
# Replace YOUR_SECRET_TOKEN with your actual value
WEBHOOK_URL="https://script.google.com/macros/s/Aereeeeeeekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk8zetE7lhwBk-A-eeeeee/exec"
AUTH_TOKEN="YOUR_SECRET_TOKEN"

curl -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -H "Authorization: ${AUTH_TOKEN}" \
  -d '{
    "name": "Alice",
    "email": "alice@example.com",
    "message": "Hello Sheet!"
  }'
```

Or try the HTML form example in `examples/html-form.html`.

---

## 👨‍💻 Author

Developed by [Pradeep Yadav](https://www.linkedin.com/in/pradeepyadav949)

<!-- Optionally add: -->
- GitHub: [Pradeep Yadav](https://github.com/pradeepyadav949)
- Email: rpy@live.in
