/**
 * Created by james on 30/11/2015.
 */
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;
var url='mongodb://<dbuser>:<dbpassword>@ds054288.mongolab.com:54288/1201173';
var MongoClient = mongodb.MongoClient;