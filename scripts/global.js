const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;

function transfer(target) {
  let win = new BrowserWindow({ width: 1000, height: 700, resizable: false });
  win.on('closed', () => {
    win = null
  })
  win.loadURL("file://" + __dirname + `/../${target}/index.html`);

  let current = remote.getCurrentWindow();
  current.close();
}
