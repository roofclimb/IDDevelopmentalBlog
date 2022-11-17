/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
 const bag = {
    name: "School bag",
    volume: 30,
    color: "blue",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    }
 }

 const pencilcase={
    name:"Pencil Case",
    volume:10,
    color: "white",
    pen:{
        color:"black",
        ink:"blue",
        number:3
    }
 }