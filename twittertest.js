/**
 * Created by james on 30/11/2015.
 */
var http = require('http');

var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: 'RM7bAiVnRLk8KtDqfdTOXnONW',
    consumer_secret: '4PK9XPEfuW66DapU9U3HEJ7roULlOdV8mVZ90TfQu0pJVIedxz',
    access_token_key: '176380223-ldL5pUpSaWXI4SnIS46BvgWchjRCq9d4AmSHzp13',
    access_token_secret: 'moo9D2ilFYbaTJy3ZDHedsKpFjnhES0NmJabw4QQ1kCsc'
});

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    client.get('search/tweets', {q: 'lolcats'}, function(error, tweets){
        console.log(tweets);
    });

}).listen(port);



