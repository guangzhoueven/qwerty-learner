' 静默启动 Node.js 并显示提示
Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "node server.js", 0, False
WshShell.Popup "Node.js 服务已启动，端口在3000", 0, "提示", 0 + 64