const {app,BrowserWindow,nativeImage} = require('electron')

const path = require('path')

function creatWindow(){
    let mainWindow = new BrowserWindow({
        width:800,
        height:600,
        title:"electron app",// 网页带title 这里被屏蔽
        icon:nativeImage.createFromPath('public/favicon.ico'),
        webPreferences:{
            webviewTag:true,//可使用webview标签，
            webSecurity:false,//禁用同源策略
            preload:path.join(__dirname,'preload.js'),
            nodeIntegration:true//是否使用node集成，如果要访问本地文件的能力 就需要，一般都是true
        }
    });

    // 因为我们是加载的react生成的页面，并不是静态页面
    // 所以loadFile换成loadURL。
    // 加载应用 --开发阶段  需要运行 yarn start
    mainWindow.loadURL("http://localhost:3000").then(res=>{
        console.log("加载成功")
    }).catch(err=>{
        console.log("加载页面失败")
    })

    // 解决应用启动白屏
    mainWindow.on('ready-to-show',()=>{
        mainWindow.show();
        mainWindow.focus();
    })

    // 窗口关闭后 删除对窗口的引用
    mainWindow.on('closed',()=>{
        mainWindow=null;
    })

    // 启动时 打开devtool
    mainWindow.webContents.openDevTools();




}

app.whenReady().then(()=>{
    creatWindow();
})
app.on('window-all-closed',()=>{
    //mac 点击关闭 不会直接关闭app
    if(process.platform!=='darwin'){
        app.quit()
    }
})

app.on('activate',()=>{
    if (BrowserWindow.getAllWindows().length === 0){
        creatWindow()
    }
})


