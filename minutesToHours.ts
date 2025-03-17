{/*
    Problem statement:
    Write a function named minutesToHours that receives a number of minutes as parameter 
    and returns a number representing the same amount of time but in hours.

    constraints: minutes >= 0

    example:
    input: 150 minutes
    output: 2.5

*/}

function minutesToHours(minutes: number): number {
    return minutes / 60;
}

export { minutesToHours };