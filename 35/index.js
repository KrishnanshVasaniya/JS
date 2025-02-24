// function nice(name) {
//     console.log("Hey " + name + " you are nice!")
//     console.log("Hey " + name + " you are good!")
//     console.log("Hey " + name + " your tshirt is nice!")
//     console.log("Hey " + name + " your course is good too!")
// }

// nice('Ritvik')
// nice('Krishnansh')

function sum(a, b, c=3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}
result1 = sum(3, 2)
result2 = sum(3, 63)
result3 = sum(33, 5, 6)

console.log("The sume of these numbers is :", result1)
console.log("The sume of these numbers is :", result2)
console.log("The sume of these numbers is :", result3)


const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);