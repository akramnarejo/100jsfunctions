{/*
    Problem statement:
    You're driving to a new city for a small weekend trip. Write a function named getGasolineAmount 
    that receives 2 numbers as parameters: the number of kilometers to your destination and the average consumption of liters per 100km
    The function should return the amount of gasoline needed to complete the entire round-trip.

    constraints: 

    example:
    input: distance = 128, consumption = 6.4
    output: 16.384
    Explaination: We need 16.384 liters of gasoline to complete the trip

*/}

function getGasolineAmount(distance: number, consumptionPer100Km: number): number {
    const single_trip = distance/100;
    const gasonline = single_trip*consumptionPer100Km;
    return gasonline*2;
}

export { getGasolineAmount };