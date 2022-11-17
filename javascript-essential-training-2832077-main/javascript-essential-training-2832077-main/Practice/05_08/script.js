/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

document.querySelector("main li:first-child").classList.add("class1");
document.querySelector("main li:first-child").classList.remove("class1");
document.querySelector("main li:first-child").classList.add("class2");

document.querySelector("img").setAttribute("alt","A backpack drawing");
document.querySelector("img").setAttribute("title","Not available");
document.querySelector("img").removeAttribute("title");

document.querySelector(".site-title").style.color="purple";
document.querySelector(".site-title").style.backgroundColor="pink";
