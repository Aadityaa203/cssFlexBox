const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
}); // encoding code will output the exact text instead of buffer
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => { //copy and also make new chunk to paste another
//   console.log("----- NEW CHUNK -----");
//   console.log(chunk);
//   writeStream.write(".\nNEW CHUNK:\n");
//   writeStream.write(chunk);
// });

// read Stream with pipe
readStream.pipe(writeStream); //pipe will copy blog3.txt and paste in blog4.txt
