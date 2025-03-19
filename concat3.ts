{/*
    Problem statement:
    Write a function named concat3 that receives 3 strings as parameters (string1, string2, string3) and 
    an additional string named separator.

    The function should concatenate the three strings using the provided separator and return the result.

    constraints: 

    example:
    input: string1 = "HTML", string2 = "CSS", string3 = "Javascript", separator = ","
    output: "HTML,CSS,Javascript"

*/}

function concat3(string1: string, string2: string, string3: string, separator: string): string {
    return ([string1, string2, string3].join(separator))
}

export { concat3 };