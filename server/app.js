
var PORT = 8080;
var http = require('http');


http.createServer(function(req, res) {
  var count = GetCountFromArgOrDefault(req);

  res.writeHead(200, {
    'Content-Type': 'text/HTML'
  });
  CalculateFizzBuzz(res, count);
  res.end();

}).listen(PORT, '127.0.0.1');


function GetCountFromArgOrDefault(req) {
  var count = parseInt(req.url.slice(1));

  if (isNaN(count)) count = 100;

  return count;
}


function CalculateFizzBuzz(response, count) {
  var i, answer;

  for (i = 0; i < count; i++) {
    answer = '';

    if (i % 3 === 0) answer += 'fizz';
    if (i % 5 === 0) answer += 'buzz';
    if (answer === '') answer = i;

    response.write('<p>' + answer + '</p>\n');
  }
}

console.log('Server running on: http://localhost:%s', PORT);
