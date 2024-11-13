const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
    // Create the Electron window
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true, // Enable Node.js integration
            contextIsolation: false, // Disable context isolation for Next.js
        },
    });

    // Load your Next.js app (this will be served from http://localhost:3000)
    win.loadURL('http://localhost:3000');

    // Open DevTools by default
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
