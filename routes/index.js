var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about0', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact0', { title: 'Contact Us' });
});

router.get('/test', function(req, res, next) {
  res.render('index0', { title: 'Contact Us' });
});

router.post('/thanks_form', function(req, res, next) {


 var form={ 
 "name":req.body.name,
 "email":req.body.email,
 "add":req.body.add,
 "mo":req.body.mo,
 "nick":req.body.nick
};
 
/************************************************** */

var nodemailer = require('nodemailer');
//var fs=require("fs");
var subist = [
  form['mo']
 
];


var maillist = [
    form['email']
   
  ];
  


var data1='<br/>Swift<br/>Swift logo with text.svg<br/>Paradigm	Multi-paradigm: protocol-oriented, object-oriented, functional, imperative, block structured<br/>Designed by	Chris Lattner, Doug Gregor, John McCall, Ted Kremenek, Joe Groff, and Apple Inc.[1]<br/>Developer	Apple Inc.<br/>First appeared	June 2, 2014; 4 years ago[2]<br/>Stable release	<br/>4.2.1[3] / October 30, 2018; 2 months ago<br/>Preview release	<br/>5.0 branch[4]<br/>Typing discipline	Static, strong, inferred<br/>OS	Darwin, Linux, FreeBSD, z/OS<br/>License	Apache License 2.0 (Swift 2.2 and later)<br/>Proprietary (up to Swift 2.2)[5][6]<br/>Filename extensions	.swift<br/>Website	swift.org<br/>Influenced by<br/>Objective-C,[7] Rust, Haskell, Ruby, Python, C#, CLU,[8] D,[9]Object Pascal[10]<br/>Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, macOS, watchOS, tvOS, Linux and z/OS. Swift is designed to work with Apple\'s Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products. It is built with the open source LLVM compiler framework and has been included in Xcode since version 6, released in 2014. On Apple platforms[11], it uses the Objective-C runtime library which allows C, Objective-C, C++ and Swift code to run within one program.';

var transporter = nodemailer.createTransport({
  service: 'gmail',
  tls: { rejectUnauthorized: false } ,
  auth: {
    user: 'zomato.custcare@gmail.com',
    pass: '9157937194akash'
  }
  
});
for(var k=0;k<1;k++){
maillist.forEach(function (to, i , array) {
  subist.forEach(function (sub, j , array1) {
var mailOptions = {
  from: 'hell@fuddy.com',
  //to: '1212ajr@gmail.com',
  //subject: 'Swift Official User Welcome',
  text: '',
  html: '<center><h1>Swift Official</h1></center><hr/><p style="color:green;">Hello , User !<br/>We are very happy that you are our User.<br/></p><a href="http://www.google.com">Contact Us</a><br/>'+data1+'<br/><img src="http://img.deusm.com/informationweek/2015/09/1322066/Swift_logo.png"/>'
};
var j=0;
mailOptions.to = to;
mailOptions.subject=sub;

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    
    console.log('Email sent: ' + info.response+'  MAil No :- '+to+'  Subject : '+sub);
    
  }
});
});
});
//console.log(data1);
}

/************************************************** */
 
  
  console.log("hello"+form['name']);
  res.render('thanks_form', { title: 'Thanks',data: form });
});


module.exports = router;
