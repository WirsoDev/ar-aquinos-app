
const { GoogleSpreadsheet } = require('google-spreadsheet');

require('dotenv').config()


async function getDoc () {
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
    
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
}

module.exports = { getDoc }


///https://docs.google.com/spreadsheets/d/1InywoyrdD4XopRqt9BlBr0Heg22vbZsVOg5E4AXNb0U/edit#gid=0
