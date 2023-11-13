const fs = require("fs");
const fse = require("fs-extra");
const http = require("http");

let date = new Date();

let content = "Date: " + date.getDate() +
    "/" + (date.getMonth() + 1) +
    "/" + date.getFullYear() +
    "/\n" + "Time: " + date.getHours() +
    ":" + date.getMinutes() +
    ":" + date.getSeconds();


const server = http.createServer((req, res) => {
    if (req.url === "/users") {
        res.write("File Created Successfully in test.txt");
        fs.writeFileSync("test.txt", content);
    } else if (req.url === "/posts") {
        res.write("moved");
        fse.move("test.txt", "destination/test.txt");
    } else {
        res.write("{}");
    }
    res.end();
});

server.listen(3000);

