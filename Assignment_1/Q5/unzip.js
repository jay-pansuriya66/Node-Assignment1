
const { exec } = require('child_process');
const path = require('path');

// Path to your zip file and destination folder
const zipFilePath = path.join(__dirname, 'myfolder.zip');
const extractTo = path.join(__dirname, 'extracted_folder');

const unzipCommand = process.platform === 'win32'
  ? `powershell.exe Expand-Archive -Path "${zipFilePath}" -DestinationPath "${extractTo}" -Force`
  : `unzip -o "${zipFilePath}" -d "${extractTo}"`;

exec(unzipCommand, (err, stdout, stderr) => {
  if (err) {
    console.error(' Extraction error:', stderr);
    return;
  }
  console.log(' Zip extracted successfully to:', extractTo);
});
