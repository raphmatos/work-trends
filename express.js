const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.writeHead(200,{'content-type':'text/html'});
    const homePageHTML = fs.readFileSync('index.html');
    res.write(homePageHTML);
    res.end();
} else if(req.url === "/node.png"){
    res.writeHead(200,{'content-type':'image/png'});
    const image = fs.readFileSync('node.png');
    res.write(image);
    res.end();
} else if(req.url === "/styles.css"){
    res.writeHead(200,{'content-type':'text/css'});
    const css = fs.readFileSync('styles.css');
    res.write(css);
    res.end();
} else {
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>Sorry!<h1>');
    res.end();
}
});

server.listen(3000);