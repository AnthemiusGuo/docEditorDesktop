global.os = require('os');
global.async = require('async');
global.mongo = require('mongo');
global.XLSX = require('xlsx');
global.Class = require('node.class');
global.F = require('phpjs');

global.APPPATH = './js/app/';

var log4js = require('log4js');
log4js.replaceConsole();
logger = log4js.getLogger();

logger.setLevel('ALL');
logger.info("App Begin");
//
// //log4js.loadAppender('console');
// // log4js.loadAppender('file');
// //log4js.addAppender(log4js.appenders.file('logs/cheese.log'), 'cheese');
//
// // var logger = log4js.getLogger('cheese');
// logger.setLevel('ALL');
// OFF nothing is logged
// FATAL   fatal errors are logged
// ERROR   errors are logged
// WARN    warnings are logged
// INFO    infos are logged
// DEBUG   debug infos are logged
// TRACE   traces are logged
// ALL everything is logged

// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');

global.gFront = new Front();

var DmManager = require(global.APPPATH+'dm/dmManager.js');
global.gDmManager = new DmManager();

var excelFiles = require(global.APPPATH+'config/designFile.json');
var FileManager = require(global.APPPATH+'lib/fileManager.js');
global.gFileManager = new FileManager(excelFiles);
global.gFileManager.loadFile();
