import { SYSTEM } from '../config/system';

const {
    app,
    BrowserWindow,
    Menu,
  } = require('electron');


  
  // レンダープロセスとなるブラウザ・ウィンドウのオブジェクト。
  // オブジェクトが破棄されると、プロセスも終了するので、グローバルオブジェクトとする。
  let win:any;
  const isDev = process.env.NODE_ENV === 'development';
  
  function createWindow() { 
    // ブラウザウィンドウの作成
    win = new BrowserWindow({
        width: SYSTEM.width,
        maxwidth:SYSTEM.width,
        height: SYSTEM.height,
        maxHeight:SYSTEM.height,
        // autoHideMenuBar:true,
        useContentSize: true,
        titleBarStyle: 'hidden',
        transparent: true,
        // frame: false,
    })
    // index.html をロードする
    // const url = isDev ? 'http://localhost:3000' : `file:///${__dirname}/app/public/index.html`;
    const url = `./index.html`;
    win.loadFile(url);
    // win.loadFile('./app/public/index.html')
    // 起動オプションに、 "--debug"があれば開発者ツールを起動する
    win.webContents.openDevTools()
    // if (process.argv.find((arg) => arg === '--debug')) {
    // }
    // ブラウザウィンドウを閉じたときのイベントハンドラ
    win.on('closed', () => {
        // 閉じたウィンドウオブジェクトにはアクセスできない
        win = null
    })
  }
  
  // このメソッドは、Electronが初期化を終了し、
  // ブラウザウィンドウを作成する準備ができたら呼び出される。
  // 一部のAPIは、このイベントが発生した後にのみ使用できる。
  app.on('ready', createWindow)
  
  // 全てのウィンドウオブジェクトが閉じたときのイベントハンドラ
  app.on('window-all-closed', () => {
    // macOSでは、アプリケーションとそのメニューバーがCmd + Qで
    // 明示的に終了するまでアクティブになるのが一般的なため、
    // メインプロセスは終了させない
    if (process.platform !== 'darwin') {
        app.quit()
    }
  });
  
  app.on('activate', () => {
    // MacOSでは、ドックアイコンがクリックされ、
    // 他のウィンドウが開いていないときに、アプリケーションでウィンドウを
    // 再作成するのが一般的です。
    if (win === null) {
        createWindow()
    }
  });
  
//   const menu = Menu.buildFromTemplate([]);
//   Menu.setApplicationMenu(menu);