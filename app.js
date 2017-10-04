var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var images=[];
request('https://www.pexels.com/search/nature/',function(err , res ,body){
	if(!err && res.statusCode==200) {
		var $ =cheerio.load(body);
		$('img','div.photos').each(function()
		{
			var img =$ (this).attr('src');
			//console.log('here');
			images.push(img);
		});
		console.log(images);
		for(var i= 0;i<images.length; i++ )
		{
			if(images[i]!=undefined)
			request(images[i]).pipe(fs.createWriteStream('images/imae'+i+'.jpg'))
		}
	}
});