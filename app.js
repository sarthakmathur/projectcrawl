var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
const express = require('express');
var router = express.Router();
var http =require('http');


var app= express();
var images=[];

var alljson=[];
var ot=[];
var ot2=[];
function per(callback){
    for(i=1;i<=1;i++){
        var url1="https://www.sehat.com/india/hospitals?srchhosps=noida&page="+i;
request(url1, function(error, response, responseHtml){        

    
     

        
        var $ = cheerio.load(responseHtml);
        var allRecords = $('div.listing');
    allRecords.each(function(index, element){ 
    var urlk    = $(element).find('a.hospitalurl').attr('href');
    var title = $(element).find('a.hospitalurl span').text();
    var  location  = $(element).find('p.address').text().trim();         
    function done(cb){
            if(urlk!=undefined)
            {
                 var ot=[];
                 var ot2=[];
                 request(urlk, function(error, response, responseHtml){        
                 var $ = cheerio.load(responseHtml,);
                 var a =$('ul[class="list-unstyled"] li[itemprop="MedicalSpecialty"] span').each(function() { ot2.push($(this).text()) });;
                 var b1 =$('div[class="cheSN-lists 2-column"] li').each(function() { ot.push($(this).text()) });
                 



                 cb();
                 console.log(ot2);
                 console.log('csacscac');
                 console.log(c1);
                 console.log('\n');
                
                 console.log(ot);
                 console.log('\n');
                 console.log('\n');
                 var temp={
                           name :title,
                           address: location,
                           speciality :ot2,
                           services : ot    
                          }
                 alljson.push(temp);

                 });
            }
     }
         
      done(function cb(){
         console.log(urlk);
         console.log(title);  
         console.log(location);
         console.log('\n');
            });

  });
        
    });
}
}
  per();
   setTimeout(function()
    { 
       fs.writeFile('ouput.json',JSON.stringify( alljson), function(err){  
    console.log('successfully saved');
    })
    }
    , 40000);