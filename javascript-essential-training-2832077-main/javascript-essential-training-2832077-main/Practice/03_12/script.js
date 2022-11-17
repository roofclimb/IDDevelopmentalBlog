/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Stationary from "./Stationary.js";

const pen=new Stationary(
    "pen",
    "black",
    30,
    "blue"
)

const pencil=new Stationary(
    "pencil",
    "yellow",
    20,
    "grey"
)
console.log("The pen object: ",pen);
console.log("The pencil object: ",pencil);