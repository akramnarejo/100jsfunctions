{
  /*
    Problem statement:
    Write a function named getUserObject that receives 3 parameters:
    a string named firstName
    a string named lastName
    a number named age
    and returns an object representing an user, with the properties name and age.

    constraints: 

    example:
    input: "Jon", "Doe", 31
    output: {"name":"Jon Doe","age":31}

*/
}

function getUserObject(firstName: string, lastName: string, age: number): {name: string, age: number} {
    return {age, name: firstName+" "+lastName}
}

export { getUserObject };
