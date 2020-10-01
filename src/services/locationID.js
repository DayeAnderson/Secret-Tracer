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
        "location_id":"1",
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