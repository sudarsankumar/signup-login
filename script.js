const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const login = document.getElementById('login')
const signup = document.getElementById('signup')
const loginForm = document.querySelector('.form-login')
const signupForm = document.querySelector('.form-signup')
left.addEventListener('mouseenter' , () =>{
    container.classList.add('hover-left')
})
left.addEventListener('mouseleave' , () =>{
    container.classList.remove('hover-left')
    login.style.display = 'block'
    loginForm.style.display = 'none'
})
right.addEventListener('mouseenter' , () =>{
    container.classList.add('hover-right')
})
right.addEventListener('mouseleave' , () =>{
    container.classList.remove('hover-right')
    signup.style.display = 'block'
    signupForm.style.display = 'none'
})
login.addEventListener('click', () => {
    login.style.display = 'none'
    loginForm.style.display = 'block'
})
signup.addEventListener('click', () => {
    signup.style.display = 'none'
    signupForm.style.display = 'block'
})