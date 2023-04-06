const button =document.querySelector('#submit');


button.addEventListener('click',warning)
function warning(e){
    e.preventDefault();
    const input = document.querySelector('.input');
    const inputValue = document.querySelector('.input').value;


    if(inputValue.length===0){  
    input.classList.add('icon')
    const error = document.querySelector('.error');
    error.innerHTML = 'Please enter your email.'

    setInterval(() => {
        input.classList.remove('icon')
        error.innerHTML=''

      }, 2000);
}

}