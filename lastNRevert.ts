{/*
    Problem statement:
    Write a function named lastNRevert that receives 2 parameters:
    a string named text
    a number - n
    and returns the last n characters of text but in reverse order.

    constraints: 

    example:
    input: "T-Shirts", n=4
    output: "stri"
    Explaination: Last 4 characters are irts and their reversed order is stri.

*/}

function lastNRevert(text: string, n: number): string {
    const count = Math.min(n, text.length);
    let lastNChars = ''
    for(let i = 0; i < count; i++){
        lastNChars += text[text.length - 1 - i]
    }

    return lastNChars
}

export { lastNRevert };