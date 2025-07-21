// This script receives JSON POST requests and stores data in Google Sheets

// ====== USER CONFIGURABLE VARIABLES ======
const AUTH_TOKEN = "YOUR_SECRET_TOKEN"; // <-- Change this to your secret token
const SHEET_NAME = "Sheet1";            // <-- Change this to your sheet name
// =========================================

function doPost(e) {
  try {
    // --- Token Authentication ---
    const headers = e?.headers || {};
    const query = e?.parameter || {};
    // Accept token from header "Authorization" or query param "token"
    const token = headers.Authorization || query.token;
    if (token !== AUTH_TOKEN) {
      return ContentService.createTextOutput("Unauthorized").setMimeType(ContentService.MimeType.TEXT);
    }
    // --- End Token Authentication ---

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);

    if (!data || typeof data !== 'object') {
      return ContentService.createTextOutput("Invalid JSON");
    }

    // Get existing headers (if any)
    let headersRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].filter(String);
    let newHeaders = [...headersRow];

    // If headers are empty (first time), initialize with keys from data
    if (headersRow.length === 0) {
      newHeaders = Object.keys(data);
      sheet.getRange(1, 1, 1, newHeaders.length).setValues([newHeaders]);
    } else {
      // Add new keys to headers if not present
      for (let key in data) {
        if (!newHeaders.includes(key)) {
          newHeaders.push(key);
        }
      }
      // Update headers row if new headers were added
      if (newHeaders.length !== headersRow.length) {
        sheet.getRange(1, 1, 1, newHeaders.length).setValues([newHeaders]);
      }
    }

    // Prepare the row aligned with headers
    const row = newHeaders.map(h => data[h] || '');

    // Append the row
    sheet.appendRow(row);

    return ContentService.createTextOutput("Success");
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.message);
  }
}
