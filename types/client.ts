interface IAddress {
    city: string,
    street: string,
}

interface ICompany {
    name: string,
}

export interface IClient {
    id: string,
    name: string,
    email: string,
    address: IAddress,
    company: ICompany,
}