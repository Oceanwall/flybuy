const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;

function transfer(target) {
  let win = new BrowserWindow({ width: 1200, height: 600 });
  win.on('closed', () => {
    win = null
  })
  win.loadURL("file://" + __dirname + `/../${target}/index.html`);

  let current = remote.getCurrentWindow();
  current.close();
}
