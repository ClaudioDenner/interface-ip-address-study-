import { IResponseAPI } from "./IResponseAPI"

export type TypeContextGlobal = {
    input:string,
    setInput:React.Dispatch<React.SetStateAction<string>>,
    dataAPI:IResponseAPI,
    setDataAPI:React.Dispatch<React.SetStateAction<{ ip: string; location: { country: string; region: string; city: string; lat: number; lng: number; postalCode: string; timezone: string; geonameId: number; }; domains: string[]; as: { asn: number; name: string; route: string; domain: string; type: string; }; isp: string; }>>,
}

export type ChildrenProvider = {
    children:React.ReactNode
  }

