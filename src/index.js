const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to? undefined

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});
