const fs = require("fs");
const fsProm = require("fs/promises");

fs.readFile("./notes.txt", "UTF-8", (err, data) => {
    if (err) {
        console.log("Error reading file!");
        return;
    }
    console.log("fs", data);
});

const data = fs.readFileSync("./notes.txt", "UTF-8");
console.log("fsSync", data);

fsProm
    .readFile("./notes.txt", "UTF-8")
    .then(data => console.log("fs promise", data))
    .catch(err => console.log("Error reading file!"));
