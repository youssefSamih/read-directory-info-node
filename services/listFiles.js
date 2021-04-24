//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory

const listFiles = ({ path = '' }) => {
  //passsing directoryPath and callback function
  console.log(__dirname);
  const fullPath = path.slice(0, -1)
  return fs.readdirSync(path).map(file => {
    return {
      path: `${fullPath}/${file}`,
      size: convertBytes(fs.statSync(`${fullPath}/${file}`).size)
    }
  })
}

const convertBytes = function(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]

  if (bytes == 0) {
    return "n/a"
  }

  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))

  if (i == 0) {
    return bytes + " " + sizes[i]
  }

  return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

module.exports = listFiles;