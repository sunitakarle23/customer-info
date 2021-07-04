export interface Customer {
    id?: number,
    name: string,
    username: string,
    email: string,
    address?: Address,
    phone: string,
    website: string,
    company: Company
}
export interface Company {
    name?: string,
    catchPhrase?: string,
    bs?: string
}
export interface Address {
    street?: string,
    suite?: string,
    city?: string,
    zipcode?: string,
    get?: Geolocation,
}
export interface GeoLocation {
    lat: string,
    lng: string
}