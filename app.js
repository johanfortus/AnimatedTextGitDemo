function randomColor(){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

let letters = document.querySelectorAll('.letter')

let inervalId = setInterval(function(){
for(let letter of letters){
    letter.style.color = randomColor();
}
},100)