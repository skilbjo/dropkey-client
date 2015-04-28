// https://www.npmjs.com/package/usb-detection
// https://github.com/voodootikigod/node-serialport
// https://github.com/sidorares/node-dbus

// var dbus = require('dbus-native');
// var sessionBus = dbus.sessionBus();
// sessionBus.getService('org.freedesktop.Notifications').getInterface(
//     '/org/freedesktop/Notifications',
//     'org.freedesktop.Notifications', function(err, notifications) {

//     // dbus signals are EventEmitter events
//     notifications.on('ActionInvoked', function() {
//         console.log('ActionInvoked', arguments);
//     });
//     notifications.on('NotificationClosed', function() {
//         console.log('NotificationClosed', arguments);
//     });
//     notifications.Notify('exampl', 0, '', 'summary 3', 'new message text', ['xxx yyy', 'test2', 'test3', 'test4'], [],  5, function(err, id) {
//        //setTimeout(function() { n.CloseNotification(id, console.log); }, 4000);
//     });
// });


var dbus = require('dbus-native');
var conn = dbus.createConnection();
conn.message({
    path:'/org/freedesktop/DBus',
    destination: 'org.freedesktop.DBus',
    'interface': 'org.freedesktop.DBus',
    member: 'Hello',
    type: dbus.messageType.methodCall
});
conn.on('message', function(msg) { console.log(msg); });

// var usb = require('usb'),
// 	connected = usb.getDeviceList(),
// 	device1 	= connected[0],
// 	args 			= process.argv.slice(2)
// 	;


// 	console.log(
// 		JSON.stringify(connected[0])
// 	);

// 	console.log(
// 		device1.portNumbers
// 		);

// console.log(
// 	device1.interfaces
// );

// var dbus = require('dbus-native');
// var bus = dbus.systemBus();

// udservice = bus.getService('org.freedesktop.UDisks');
// udservice.getInterface(
//     '/org/freedesktop/UDisks',
//     'org.freedesktop.UDisks',
//     function(err, ud) {
//       ud.on('DeviceAdded', function(deviceObjectPath) {
//         console.log('DeviceAdded', deviceObjectPath);
//       });
//     }
//   );