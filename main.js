// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
var fs = require('fs')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  // Change window settings here.
  mainWindow = new BrowserWindow({ width: 1000, height: 700, resizable: false })
  mainWindow.setMenu(null);
  mainWindow.setIcon("./images/apple-touch-icon.png");
  // and load the index.html of the app.
    mainWindow.loadFile('pages/landing_page/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  fs.readFile('data/users.json', 'utf8', function (err, data) {
    if (err) throw err
    let obj = JSON.parse(data)

    let nameIndex = Math.floor(Math.random() * obj.length)
    let name = obj[nameIndex].firstName + ' ' + obj[nameIndex].lastName

    fs.readFile('data/flightData.json', 'utf8', function (err, data) {
      if (err) throw err
      obj = JSON.parse(data)

      let keys = Object.keys(obj)
      let start = keys[keys.length * Math.random() << 0];
      console.log(start)

      let flightIndex = Math.floor(Math.random() * obj[start].flights.length)

      var stream = fs.createWriteStream('data/persistence.txt')
      stream.once('open', function (fd) {
        stream.write(name + '\n')
        stream.write(start + '\n')
        stream.write(flightIndex + '\n')
        stream.end()
      });
    })
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    var stream = fs.createWriteStream('data/foodPersistence.json');
    stream.once('open', function (fd) {
      stream.write("\n");
      stream.end()
    });
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
