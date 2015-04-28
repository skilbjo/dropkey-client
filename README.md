node app.js | jq '.[] | { bus: .busNumber, address: .deviceAddress,  descriptor: .deviceDescriptor.idVendor, product: .deviceDescriptor.idProduct }'
