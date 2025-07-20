const fs = require('fs');
const util = require('util');

// Promisify fs.unlink
const unlinkAsync = util.promisify(fs.unlink);

function deleteFile(filePath) {

  unlinkAsync(filePath)
  .then(()=>console.log(`File deleted successfully: ${filePath}`))
  .catch((err)=>console.error(`Error deleting file: ${err.message}`))
    
}

// Example usage: replace 'test.txt' with your file path
deleteFile('test.txt');
