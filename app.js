var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
const express = require('express');
var router = express.Router();
var http =require('http');
var where = require('node-where');
var sleep = require('sleep');
//var geocoder = require('geocoder');
var allk=[];
var b1=-1;
function ouputfile(err, data) {
    if (err) throw err
    obj = JSON.parse(data)
    var m=Object.keys(obj).length
    
    for(i=0;i<15;i++)
    {
        var t=obj[i].name;
        const b = t+' '+'Noida';
        setTimeout(function(){
            ;
         where.is(b, function(err, result) {
          if (result) {

             console.log(b);
             b1=b1+1;
             
            console.log(result.get('lat'),result.get('lng'));
            console.log(b1);
            
            
            obj[b1].lat=result.get('lat');
            obj[b1].lng=result.get('lng');
            allk.push(obj[b1]);
            

       }
        }); },i*1000);
            
     }
   
     for(i=15;i<70;i++)
    {
        var t=obj[i].name;
        const b = t+' '+'Noida';
        setTimeout(function(){
         where.is(b, function(err, result) {
          if (result) {
             console.log(b);
             b1=b1+1;
             console.log(result.get('lat'),result.get('lng'));
             obj[b1].lat=result.get('lat');
             obj[b1].lng=result.get('lng');
             allk.push(obj[b1]);

       }
        }); },i*1000);
            
     }
    for(i=70;i<100;i++)
    {
        var t=obj[i].name;
        const b = t+' '+'Noida';
        setTimeout(function(){
         where.is(b, function(err, result) {
          if (result) {
             console.log(b);
             b1=b1+1;
             console.log(result.get('lat'),result.get('lng'));
             obj[b1].lat=result.get('lat');
             obj[b1].lng=result.get('lng');
             allk.push(obj[b1]);

       }
        }); },i*1000);
            
     }
     for(i=100;i<m;i++)
    {
        var t=obj[i].name;
        const b = t+' '+'Noida';
        setTimeout(function(){
         where.is(b, function(err, result) {
          if (result) {
             console.log(b);
             b1=b1+1;
             console.log(result.get('lat'),result.get('lng'));
             obj[b1].lat=result.get('lat');
             obj[b1].lng=result.get('lng');
             allk.push(obj[b1]);

       }
        }); },i*1000);
            
     }
     setTimeout(function () {
    fs.writeFile('ouput1.json',JSON.stringify( allk), function(err){  
    console.log('successfully saved');
});
},i*1001);
    
}
fs.readFile('./output.json', 'utf8',ouputfile);
console.log('Sarthak Mathur')
