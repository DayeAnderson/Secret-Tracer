const { json, response } = require("express")
const axios  = require('axios')

module.exports = {
    getLocation
}

//Gets the Location ID

async function getLocation(req,res) {
    const response = await axios({
        "method":"GET",
        "url":`https://tripadvisor1.p.rapidapi.com/${req.body.baseUrl}`,
        "headers":{
            "content-type":"application/json",
            "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
            "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
            "useQueryString":true
        },"params": req.body.params
    })
    .catch(console.error)
    .then((res) => res.data.data)
    
    return res.json(response)
}


// const getLocationID = async ({baseUrl, params}) => {
//     const response = await axios({
//         "method":"GET",
//         "url":`https://tripadvisor1.p.rapidapi.com/${baseUrl}`,
//         "headers":{
//             "content-type":"application/json",
//             "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
//             "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
//             "useQueryString":true
//         },"params": params
//     })
//     console.log('YOUR LOCATION IS ' + response.data.data[0].result_object.location_id)
//     //Make safe
//     return response.data.data[0].result_object.location_id
// }

// //Gets Array of the Attractions for Location

// const getAttractionsFromLocationID = async ({locationID}) => {
//     const response = await axios({
//         "method":"GET",
//         "url":"https://tripadvisor1.p.rapidapi.com/attractions/list",
//         "headers":{
//         "content-type":"application/json",
//         "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
//         "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
//         "useQueryString":true
//         },"params":{
//         "lang":"en_US",
//         "currency":"USD",
//         "sort":"recommended",
//         "lunit":"km",
//         "limit": "5",
//         "location_id": locationID
//         }
//         })
//         console.log('Attraction #1 is ' + response.data.data[0].name)
//         //Make safe
//         return response.data.data
//     }

// const getAttractionsForLocationName = async (req, res) => {
//     const { body: {baseUrl, baseUrl2, params} } = req
//     const locationID = await getLocationID({baseUrl, params})
//     const attractions = await getAttractionsFromLocationID({baseUrl2, params, locationID})
//     console.log(attractions)
//     res.json({attractions})
//     return
// }

