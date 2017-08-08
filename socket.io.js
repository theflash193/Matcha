var io = require('io');

console.log('hello world');

var socket = io.connect('http://localhost:8080/connection');
			socket.on('message', function(message) {
				alert('le serveur a un message :' + message)
			})
