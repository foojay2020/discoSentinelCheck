const https   = require('https')
const options = {
    hostname: 'api.foojay.io',
    port: 443,
    path: '/disco/v1.0/packages/a2a505f4d8956eb730c1ef285b23c269',
    method: 'GET'
}

const request = https.request(options, response => {
    response.on('data', d => {
    	const json      = JSON.parse(d)
    	const available = (json.hasOwnProperty('id') && json.id === 'a2a505f4d8956eb730c1ef285b23c269')
    	console.log('Sentinel package available: ' + available)
    });
})

request.on('error', error => {
    console.error('Error: ', error.message)
})

request.end()