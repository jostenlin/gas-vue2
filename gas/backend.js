
const SETTINGS = {
    APP_NAME: "GAS Vue Web App Template"
}

function doGet(e) {
    const htmlOuput = HtmlService.createTemplateFromFile("index.html").evaluate()
    htmlOuput.setTitle(SETTINGS.APP_NAME)
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .addMetaTag("viewport", "width=device-width,initial-scale=1")
    return htmlOuput
}

function include(filename) {
    return HtmlService.createTemplateFromFile(filename).evaluate().getContent()
}

function createUser(data) {
    // sotre your user in a spreadsheet or somewhere else
    const ss = SpreadsheetApp.getActive();
    const userTable = ss.getActiveSpreadsheet();
    userTable.appendRow(data)
    return {user: data[0], email: data[1], id: 100}
}