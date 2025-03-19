{/*
    Problem statement:
    Write a function named max5 that receives 5 numbers as parameters 
    and returns the biggest one between them.

    constraints: 

    example:
    input: 19, 12, 2, -31, 19.5
    output: 19.5

*/}

function max5(...args: number[]): number {
    return Math.max(...args)
}

export { max5 };