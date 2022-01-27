//MATH IN JS
// let a = 1
// alert(-a) //Унарный минус
// console.log(-a)
// let b = 2
// let c = 3
// alert(b*c)
// alert(b+c)
// alert(b-c)
// alert(b/c)
// alert(b**c)

            // ОПЕРАНТ , a*b    a-Левый оперант       b-Правый оперант
// let alfa = 15
// let omega = 14
// console.log(alfa%omega)
// %- Взятие остатка от деления
// alert(16**0.5)
                // Увеличение , уменшение НА. Увеличение ,уменшение В.
// let message = "Я изучаю js" 
//     message += ", я стану крутым программистом"

// alert(message) 
// let nool = 5
    // nool += 3
// console.log(nool)
    // nool -= 10
// console.log(nool)
//     nool *= 5
// console.log(nool)
//     nool /= 5
// console.log(nool)
// alert("1" + 1)
// alert(2 + 2 + 3 + "4")
// alert("25px")
        // Инкремент
// let a = 5
//     a++                 //a++ = a+1
// alert(a)
// if(a>=6) {
//     alert("Привет")
// }

                // ДЕКРИМЕНТ
// let b = 10
//     b--                 //b-- = b-1
//     alert(b)

let txt = document.querySelector("h1")
let buttonCreated = document.getElementById("button")
let div = document.getElementById("div")
let block = document.querySelector(".block")

function Solomon() {
    txt.style.color = "gold"
    txt.style.marginLeft = "125px"
    div.style.backgroundColor = "black"
    block.style.display = "block"
}
buttonCreated.addEventListener("click", Solomon )

