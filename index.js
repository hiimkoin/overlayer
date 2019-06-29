const { app, BrowserWindow } = require('electron')
const path = require('path')

function create() {
    let win = new BrowserWindow({ 
        title: 'Overlayer',
        frame: false,
        transparent: true,
        fullscreen: true,
        alwaysOnTop: true
    })

    win.on('closed', () => win = null)
    win.setIgnoreMouseEvents(true)
    let index = path.join(__dirname, '../../..', 'client', '1v1-overview.html')
    win.loadFile(index)
    win.webContents.on('did-finish-load', function() {
      win.webContents.insertCSS('html,body{background-color:transparent !important;}')
    })
}

app.on('ready', create)
app.on('window-all-closed', () => app.quit())
