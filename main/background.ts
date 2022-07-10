import { app, ipcMain, BrowserWindow } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import { Server } from 'socket.io'
import EventEmitter from 'events';

const isProd: boolean = process.env.NODE_ENV === 'production';
const serverEvents = new EventEmitter()

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    webPreferences: {
      webSecurity: false,
    },
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }

  ipcMain.handle('create server window', async (event, port: number) => {
    console.log(`Creating server window`)
    const serverWindow = createWindow('server', {
      width: 800,
      height: 400,
    })

    const promise = new Promise(resolve => {
      serverEvents.once('server started', resolve)
    })

    if (isProd) {
      await serverWindow.loadURL(`app://./server.html?port=${port}`)
    } else {
      const devPort = process.argv[2];
      await serverWindow.loadURL(`http://localhost:${devPort}/server?port=${port}`);
      serverWindow.webContents.openDevTools();
    }

    await promise
  })

  ipcMain.handle('start server', async (event, port: number) => {
    console.log(`Starting server on port ${port}`)

    const io = new Server(port)

    const win = BrowserWindow.fromWebContents(event.sender)
    win.on('close', () => {
      io.close()
      console.log('Server Closed!')
    })

    let clicks = 0
    let upgrades = 0

    const SINGLE_UPGRADE_COST = 50
    const MILLION_UPGRADE_COST = 40_000_000

    const setClicks = (v) => {
      clicks = v
      io.emit('clicks updated', v)
    }

    const setUpgrades = (v) => {
      upgrades = v
      io.emit('upgrades updated', v)
    }

    io.on("connection", (socket) => {
      console.log(`New Connection
  Socket Id: ${socket.id}`)

      socket.emit('clicks updated', clicks)
      socket.emit('upgrades updated', upgrades)

      socket.on('click', () => {
        setClicks(clicks + 1)
      })

      socket.on('buy upgrade', () => {
        if (clicks >= SINGLE_UPGRADE_COST) {
          setClicks(clicks - SINGLE_UPGRADE_COST)
          setUpgrades(upgrades + 1)
        }
      })

      socket.on('buy million upgrades', () => {
        if (clicks >= MILLION_UPGRADE_COST) {
          setClicks(clicks - MILLION_UPGRADE_COST)
          setUpgrades(upgrades + 1_000_000)
        }
      })

      socket.on('stats reset', () => {
        setClicks(0)
        setUpgrades(0)
      })
    })

    console.log("socket.io server started")
    
    serverEvents.emit('server started')
  })
})();

app.on('window-all-closed', () => {
  app.quit();
});
