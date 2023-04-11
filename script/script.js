const showbtn = document.querySelector('.form-eyeon');
const inputpass = document.querySelector('.form-password');

showbtn.addEventListener('click',function (event) {
    if(inputpass.getAttribute('type') === 'password'){
        inputpass.setAttribute('type','text')
    }else {
        inputpass.setAttribute('type', 'password')
    }
    event.preventDefault()
})



// function RegExp() {
    
//     const regex = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u

// return regex
// }

// const emailNode = document.querySelector(form-password)



document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('.form-member');

    if (input) {
        input.value = localStorage.getItem("example-name-adress") || "";

        input.addEventListener('input', function() {
            localStorage.setItem("example-name-adress", this.value);
        })
    }
})





