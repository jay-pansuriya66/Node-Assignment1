const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'demo.txt');

fs.writeFile(filePath, 'Hello, Node.js!\n', (err) => {
  if (err) return console.error('Error writing file:', err);
  console.log(' File created and written to.');


  fs.appendFile(filePath, 'This is appended text.\n', (err) => {
    if (err) return console.error('Error appending file:', err);
    console.log(' Text appended.');


    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return console.error('Error reading file:', err);
      console.log(' File content:\n', data);

      const newPath = path.join(__dirname, 'renamed-demo.txt');
      fs.rename(filePath, newPath, (err) => {
        if (err) return console.error('Error renaming file:', err);
        console.log(' File renamed.');


        if (fs.existsSync(newPath)) {
          console.log(' File exists after renaming.');

        }
      });
    });
  });
});
