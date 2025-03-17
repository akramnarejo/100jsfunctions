{/*
    Problem statement:
    Write a function named averageOf4Numbers that receives 4 numbers as parameters 
    and returns the mathematical average between them.

    constraints: 

    example:
    input: 11, 9, 33, 28
    output: 20.25

*/}

function averageOf4Numbers(num1: number, num2: number, num3: number, num4: number): number {
    return (num1 + num2 + num3 + num4) / 4;
}

export { averageOf4Numbers };