const fs = require('fs');
const { exec } = require('child_process');

// Read environment variables
const apiId = process.env.TG_API_ID;
const apiHash = process.env.TG_API_HASH;

// Create the config object
const config = {
  apiId,
  apiHash
};

// Write the config object to config.json
fs.writeFileSync('config.json', JSON.stringify(config, null, 2));

console.info('config.json file has been created with the following content:');
console.info(config);

// Continue to execute the original CMD
const args = process.argv.slice(2).join(' ');
exec(args, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});