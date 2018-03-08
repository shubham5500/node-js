const request = require('request');

geoCodeAddress = (location)=>{
    console.log(location)
    
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}`,
        json: true
    }, (error, response, body)=>{    
        if(error){
            console.log('Server Error')
        }else if(body.status === 'ZERO_RESULTS'){
            console.log('Results not found')
        }else if (body.status === 'OK'){
            console.log(body.results[0].geometry.location.lat)
            console.log(body.results[0].geometry.location.lng)
        }
        console.log('Hi')
    })
    }

module.exports = {
    geoCodeAddress
}