const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 800, minWidth: 900, minHeight: 600,
    title: "Nzema East Municipal Health Facilities EHR",
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, "..", "www", "index.html"));
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
