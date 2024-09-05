export type Restaurant = {
    name: string,
    geometry: [number, number],
    details: RestaurantDetails,
    location: LocationDetails
}

export type RestaurantDetails = {
    chef: string | null,
    owner: string | null,
    awarded_since: string | number,
    website: string
}

export type LocationDetails = {
    address: string
    city: string,
    country: string,
    country_iso_code: string
}