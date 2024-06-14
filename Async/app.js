// fs lib and we want to get content from my txt. file

const fs = require("fs");

// console.log(fs);

const text = fs.readFileSync("./text.txt", "utf-8", (err, data) =>) {
    if (err) {
        console.log(err);
    } else {
        console.log(data)
    }
}

console.log(text);