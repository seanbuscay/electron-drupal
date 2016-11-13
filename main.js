const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

require('electron-debug')({showDevTools: false})
// php
var path = require('path')
var php = require('gulp-connect-php')
php.server({
  port: 8088,
  hostname: '127.0.0.1',
  base: path.resolve(__dirname) + '/web',
   // router: path.resolve(__dirname) + '/project/drupal/router.php',
  keepalive: false,
  open: false,
    // this is now pointing to a possible local installation of php, that is best for portability
    // feel free to change with a system-wide installed php, that is dirty & working, but less portable
  bin: path.resolve(__dirname) + '/bin/php',
  root: '/',
  stdio: 'inherit',
  ini: path.resolve(__dirname) + '/bin/php.ini'
})

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

app.setName('Electron Drupal')

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
  php.closeServer()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    nodeIntegration: false,
    title: 'Electron Drupal',
    webPreferences: {
      webSecurity: false
    }
  })
  // and load the app's front controller. Feel free to change with app_dev.php
  mainWindow.loadURL('http://127.0.0.1:8088/index.php')

  // Uncomment to open the DevTools.
  // mainWindow.webContents.openDevTools();
  mainWindow.on('unresponsive', function () {
    console.log('stopped')
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    php.closeServer()
    mainWindow = null
  })
})
