
console.log('Current directory (__dirname):', __dirname);
console.log('Current file (__filename):', __filename);

global.myGlobalValue = 'Hello from the global object!';
console.log('Global value:', global.myGlobalValue);


setTimeout(() => {
  console.log('setTimeout called after 1 second');
}, 1000);


let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`setInterval: count = ${count}`);
  if (count === 3) {
    clearInterval(intervalId); 
    console.log('Interval cleared');
  }
}, 1000);


console.log('Process PID:', process.pid);
console.log('Platform:', process.platform);
console.log('Node version:', process.version);


console.log('NODE_ENV:', process.env.NODE_ENV || 'not set');
