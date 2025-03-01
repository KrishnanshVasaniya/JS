console.log("Krishnansh")

// let boxes = document.getElementsByClassName("box")
// console.log("boxes")

// boxes[2].style.backgroundColor = "red"

// document.getElementById("red").style.backgroundColor = "red"
// document.getElementById("yellow").style.backgroundColor = "yellow"

// document.querySelector(".box").style.backgroundColor = "aqua";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "aqua";
})