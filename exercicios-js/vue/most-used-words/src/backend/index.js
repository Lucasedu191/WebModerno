const { ipcMain } = require('electron')
const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const prepareData = require('./groupWords')
ipcMain.on('process-subtitles', (event, path) =>{
    
    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => groupWords(words))
        .then(groupedWords =>
            event.reply('process-subtitles', groupedWords))
})