const {exec} = require('child_process');
const path = require('path');
const { stdout, stderr } = require('process');

const folderPath = path.join(__dirname, 'myfolder');
const zipfilepath = path.join(__dirname, 'myfolder.zip');

const zipCommand = process.platform == "win32" ? `powershell.exe Compress-Archive -Path "${folderPath}\\*" -DestinationPath "${zipfilepath}"` : `zip -r "${zipfilepath}" "${folderPath}"`;

exec(zipCommand, (err, stdout, stderr) => {
    if(err)
    {
        console.error("Error zipping folder:", stderr);
    }
    console.log("Folder zipping succesfully to : ", zipfilepath);
});