const baseUrl = "/api/locationID";

export function getLocationID({searchValue}) {
  return fetch(
    baseUrl,
    {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}), 
      body:JSON.stringify({ 
        baseUrl: 'locations/search',
        params: {
        "limit":"30",
        "sort":"relevance",
        "offset":"0",
        "lang":"en_US",
        "currency":"USD",
        "units":"km",
        "query": searchValue
    }})
    },{ mode: "cors" }
  ).then((res) => console.log(res.json()));
}

export async function getTopLocations({lat, long}) {
  return await fetch(
    baseUrl,
    {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}), 
      body:JSON.stringify({ 
        baseUrl: 'restaurants/list-by-latlng',
        params: {
          "limit":"30",
          "currency":"USD",
          "distance": 2,
          "lunit":"km",
          "lang":"en_US",
          "latitude": `${lat}`,
          "longitude": `${long}`

    }})
    },{ mode: "cors" }
  )
  .then((res) => res.json())
}