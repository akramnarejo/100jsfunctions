{
    /*
      Problem statement:
      Write a function named canDriveCar that receives 2 parameters:
      an object named user
      an object named car
      and returns a boolean indicating if the user can drive the car or not.

      Note: anybody can drive a car if it has at least 18 years old or if the car has an engine smaller than 1000cc.
  
      constraints: 
  
      example:
      input: {"name":"Jon Doe","age":21} {"engineSize":1200,"name":"Mazda 3"}
      output: true
  
  */
  }
  
  function canDriveCar(user: {name: string, age: number}, car: {name: string, engineSize: number}): boolean {
    return user.age >= 18 || car.engineSize < 1000
}

export { canDriveCar };
  