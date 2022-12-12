let form = document.querySelector('form')
let ul = document.querySelector('ul')
let input = document.querySelector('input')

ul.addEventListener('click',function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
    }
    else if(e.target.tagName === ''){
        e.target.parentElement.style.textDecoration = 'line-through'
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    let li = document.createElement('li')
    let removeBtn = document.createElement('button')
    li.innerText = input.value + ' '
    removeBtn.innerText = 'X'
    input.value = ''
    ul.appendChild(li)
    li.appendChild(removeBtn)
})