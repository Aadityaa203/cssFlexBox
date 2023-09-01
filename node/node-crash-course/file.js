const fs = require("fs");

// //reading files
// fs.readFile("./docs/blog.txt", (err, data) => { //file share
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log("Last Line");

//writting files
// fs.writeFile("./docs/blog.txt", "hello, World", () =>{
//     console.log("file was written");
// });

// fs.writeFile("./docs/blog2.txt", "hello, Second World", () =>{//creates new blog2 file and write docs inside
//     console.log("file was written");
// });

//directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     //creating a folder
//     if (err) {
//       console.log(err);
//     }
//     console.log("Folder Created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => { //folder delete
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  //delete file deleteme.txt
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
