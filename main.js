const mathDiv = document.querySelectorAll('.num')
const inp = document.querySelector('.inp')
const orange = document.querySelectorAll('.orange')
const removeBtn = document.querySelector('.div div .fa-remove ')
let error = document.querySelector('.error')
let noom = 0
let number = 1
let num = 10
let numb = 1
let nu = 0
let nuu = 0
let n = 0
let na = 0
let na2 = 0
let number2 = 0
let num2 = 0
let n2 = 0
let numb2 = 0
let nu2 = 0 
let namb2 = 0
let nat2 = 0
let nat = 0
let er = 0

document.querySelector('.orange2').addEventListener('click', function(){
    noom = 0
        if(number === 0){
            inp.value += '**'
            number = 1
        numb = 1
        inp.classList.remove("orange")
        n = 0
        numb2 = 1
        nu2 = 0
        namb2 = 1
        n2 = 0
        }else{
            error.style.opacity = '1'
    setTimeout(() => {
        error.style.opacity = '0'
    }, 1000);
        }
})
document.querySelector('.orange3').addEventListener('click', function(){
           if(nu === 0) {
             if(n == 0){
               inp.value += '('
             }else if(n == 1) {
                inp.value += '*('
                n = 0
             }
             na += 1 
             number2 = 1
             number = 1
            nuu = 1
        } else{
            if(numb2 === 0) {
            if(na2 < na - 1){
        inp.value += ')'
            }
        else { nu = 0
        inp.value += ')'
        }
        na2 += 1
         }
       }
        numb = 1
        inp.classList.remove("orange")
         nu2 = 0
})
for(let i = 0; i < orange.length; i++){
    orange[i].addEventListener('click', function(){
        noom = 0
        if(number === 0){
            inp.value += (orange[i].textContent)
        } else {
            error.style.opacity = '1'
    setTimeout(() => {
        error.style.opacity = '0'
    }, 1000);
        }
        number = 1
        numb = 1
        inp.classList.remove("orange")
        n = 0
        numb2 = 1
        nu2 = 0
        nat2 = 0
        nat = 0
        n2 = 0
    })
}
for(let i = 0; i < mathDiv.length; i++){
    mathDiv[i].addEventListener('click', function(){
        inp.classList.remove("orange")
        if(num == 5 || numb == 2) {
inp.value = ''
        }
        if(inp.value.length == 11){
            inp.classList.add("wiii")
        }
        if(noom === 0 && n2 === 0) {
            inp.value += (mathDiv[i].textContent)  
        } else if (n2 === 1){
            inp.value += `*${(mathDiv[i].textContent)}`
        }
        if(inp.value.length === 15 || inp.value.length === 30 || inp.value.length === 45){
            noom = 1
        }
        number = 0
        if(mathDiv[i].textContent == 0 && inp.value.length == 1 && mathDiv[i].textContent != '.'){
num = 5
        }else{
            num = 10
        } 
        numb = 1
        n = 1
        numb = 0
        n2 = 0
        numb2 = 0
        nu2 += 1
        nat2 += 1
        if(na > na2){
nu = 1
        }
    })  
}
const equality = () => {
    inp.classList.add("orange")
        try{
        eval(inp.value)
        if(inp.value != ""){
            inp.value = eval(inp.value)
        }
            n2 = 0
            numb = 2
        }catch(err){
        er = 1
        inp.classList.remove("orange")
        }     
     if(er == 1){
    error.style.opacity = '1'
    setTimeout(() => {
        error.style.opacity = '0'
    }, 1000);
    er = 0
}
}
document.querySelector('.red').addEventListener('click', function(){
    inp.value = ' '
})

document.querySelector('.xddd').addEventListener('click', function(){
    if(numb === 0) {
    inp.value += '/100'
    n2 = 1
    }
})
removeBtn.addEventListener('click', function(){
    if(namb2 === 0){
     inp.value = inp.value.slice(0, inp.value.length -1)
    } else{
        inp.value = inp.value.slice(0, inp.value.length -2)
    }
     if(nu2 > 1){

     } else {
        number = 0
     } 
        nat += 1
     if(nat2 == nat) {
        n = 0
number = 1
     }
     namb2 = 0 
})