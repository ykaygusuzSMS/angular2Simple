var express = require('express')
var app = express()

app.use(express.static('dist'));

app.listen(process.env.PORT || 8080,function(){
	console.log('web server running on port 4200')
})
