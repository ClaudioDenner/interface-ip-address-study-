export type IResponseAPI = {
    ip:string,
    location: {
        country: string,
        region: string,
        city: string,
        lat: number,
        lng: number,
        postalCode: string,
        timezone: string,
        geonameId: number
    } | undefined,
    domains: string[],
    as: {
        asn: number,
        name: string,
        route: string,
        domain: string,
        type: string
    },
    isp: string
} | undefined