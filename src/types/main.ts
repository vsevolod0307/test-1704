export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

export interface User {
    id: number, 
    name: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    username: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}