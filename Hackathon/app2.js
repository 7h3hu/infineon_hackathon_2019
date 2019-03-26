const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>
 <head>
    <title>Flask Intro - login page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="static/bootstrap.min.css" rel="stylesheet" media="screen">
    <script type="text/javascript" src="http://code.jquery.com/jquery 2.1.4.min.js"></script>  
 </head>
 <body>
<input id="submit" type="submit" value="Test Send Button">
</body>
</html>

');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
file:///home/pi/Hackathon/templates/beer.html
file:///home/pi/Hackathon/templates/beer.html
