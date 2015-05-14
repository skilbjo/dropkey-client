var njds 		= require('nodejs-disks'),
	usb 			= require('usb'),
	args 			= process.argv.slice(2),
	fs 				= require('fs'),
	path 			= require('path'),
	dbox 			= require('dbox'),
	token 		= require('./config.js').dropbox_token,
	avaiable_drives = []
	;

var getDrives = function(cb) {
	njds.drives(function(err, drives) {
		njds.drivesDetail(drives, function(err, drive) {
			drive.forEach(function(drive) {
				return avaiable_drives.push(drive.mountpoint);
			});
			cb();
		});
	});
};

getDrives(function() {
	console.log(avaiable_drives[1]);
	readDerp();
});

var readDerp = function() {
	var drp_file = path.join(avaiable_drives[1], 'md5.drp');
	fs.readFile(drp_file, 'utf-8', function(err, data) {
		console.log(data);
	});
};

console.log(token);




// ask user to provide oauth details for dropbox
// create .drp file
// pull a file from dropbox using authentication from .drp file


