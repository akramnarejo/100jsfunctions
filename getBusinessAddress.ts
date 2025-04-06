{/*
    Problem statement:
    Write a function named getBusinessAddress that receives an Object representing a business as a parameter, 
    and returns a string representation of the it's address.

    constraints: 

    example:
    input: {"address":{"number":3,"zipCode":123500,"street":"Avenuepark"},"name":"100 Functions ltd."}
    output: "Avenuepark, number 3, 123500"

*/}

function getBusinessAddress(business: {address: {number: number, zipCode: number, street: string}, name: string}): string {
    const address = `${business.address.street}, number ${business.address.number}, ${business.address.zipCode}`
    return address
}

export { getBusinessAddress };