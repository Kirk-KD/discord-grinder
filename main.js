const { app, BrowserWindow, ipcMain } = require("electron");

const grinders = require("./grinder.js");

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        show: false
    });

    // win.setMenu(null);
    win.loadFile('./src/index.html');

    win.once('ready-to-show', () => {
        win.show();
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            creatWindow();
        }
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

ipcMain.handle("start", async (event, ...args) => {
    setTimeout(() => {
        grinders[args[0]].start();
    }, 3000);
})
