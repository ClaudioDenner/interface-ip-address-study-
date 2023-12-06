
export const VALUE_DEAFULT_RESPONSE_API = {
  ip:'----',
    location: {
        country: '----',
        region: '----',
        city: '----',
        lat: 0,
        lng: 0,
        postalCode: '----',
        timezone: '----',
        geonameId: 0
    },
    domains: ['----'],
    as: {
        asn: 0,
        name: '----',
        route: '----',
        domain: '----',
        type: '----'
    },
    isp: '----'

}

export const VALUE_DEFAULT_CONTEXT = {
  input:'',
  setInput:()=>{},
  dataAPI:VALUE_DEAFULT_RESPONSE_API,
  setDataAPI:()=>{}
}