var myPort;

function getSerialPort(callback) {

    com.list(function (err, ports) {

        for (var i = 0; i < ports.length; i++) {//ports.forEach works too, but I know this is sync, and that's what we want in this case so we can break out of the loop when we find the right port
            var port = ports[i];

                if(port.pnpId.indexOf("duino") != -1 || port.manufacturer.indexOf("duino") != -1 || port.comName.indexOf('moti') != -1){ // it look for "duino" somewhere
                    myPort = new SerialPort(port.comName,{
                    baudrate: 115200,
                    parser: serialport.parsers.readline("\r\n"),
                });

                callback(serialPort);
                return;//I'm not sure what return does in a ports.forEach situation, so I changed it to a standard for loop, so that we know that this is breaking us out of it.
            }
        }
    });
}

// getSerialPort(function (myPort) {
console.log('Serial Port: ' + myPort);
console.log("pnpId: " + port.pnpId);
console.log("manufacturer: " + port.manufacturer);
console.log("comName: " + port.comName);
console.log("serialNumber: " + port.serialNumber);
console.log("vendorId: " + port.vendorId);
console.log("productId: " + port.productId);
// });