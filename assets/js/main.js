
// ======================== Scroll header ============================ //
let header = document.querySelector('header');
    window.addEventListener('scroll',() => {
    header.classList.toggle('shadow',window.scrollY > 0);
});

// ================= Slide card movie coming soon ===================== //
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const coming = document.querySelector('.coming-container');
const itemNumber = coming.querySelectorAll('img').length;
const ratio = Math.floor(window.innerWidth / 200);
let clickRightCounter = 0;
arrowRight.addEventListener("click",() => {
    clickRightCounter++;
    var a = itemNumber - (9 + clickRightCounter) + (9 - ratio) + clickLeftCounter; 
    console.log("Right = ",clickRightCounter);
    console.log("item = ",itemNumber);
    console.log('a = ',a);
    console.log('L = ',clickLeftCounter);
    if(a >= 0){  
        arrowLeft.classList.add('active'); 
        coming.style.transform = `translateX(${coming.computedStyleMap().get('transform')[0].x.value-191.5}px)`;
    }
    else{
        arrowLeft.classList.remove('active'); 
        coming.style.transform = 'translateX(0)';
        clickRightCounter = 0;
        clickLeftCounter = 0;
    }
});
let clickLeftCounter = 0;
arrowLeft.addEventListener("click",() => {
    clickLeftCounter++;
    var b = itemNumber - (9 + clickLeftCounter) + (9 - ratio) + clickRightCounter; 
    console.log("Left = ",clickLeftCounter);
    console.log("item = ",itemNumber);
    console.log("b = ",b);
    console.log('R = ', clickRightCounter);
    if(b >= 0){  
        arrowLeft.classList.add('active'); 
        coming.style.transform = `translateX(${coming.computedStyleMap().get('transform')[0].x.value+191.5}px)`;
        if(coming.style.transform === 'translateX(0px)'){
            arrowLeft.classList.remove('active');
        }
    }
});

// ============================ Responsive ============================== // 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// ============================ MODAL ===================================== //

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const regBtn = document.querySelector('.js-reg-btn');
const modal = document.querySelector('.js-modal');
const modalContainerReg = document.querySelector('.js-modal-container');
const modalCloseReg = document.querySelector('.js-modal-close');
const registerBtn = document.querySelector('.js-register-btn');
const infoUser = document.querySelector('.info-user');

// ===== Slide sign form ===== //
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});

// ===== Open or remove sign form ===== //
function hideRegForm(){
    modal.classList.remove('open');
}

regBtn.addEventListener('click',() => {
    modal.classList.add('open');
});

modalCloseReg.addEventListener('click', hideRegForm);
modal.addEventListener('click', hideRegForm);
modalContainerReg.addEventListener('click', (event) => {
    event.stopPropagation();
});


// ==== SAVE THE USER INFORMATION ===== //

var arr = [];

registerBtn.addEventListener('click', () => {
    var a = document.getElementById("signup-username").value;
    var b = document.getElementById("signup-email").value;
    var c = document.getElementById("signup-password").value;
    var d = document.getElementById("confirm-password").value;

    if(a == '' || b == '' || c == '' || d == ''){
        alert('You need to fill in all the information!');
    }

    else if(d !== c){
        alert('Password not matched!');
    }
    else{
        arr.push(a,b,c);
        regBtn.classList.add('login');
        infoUser.classList.add('active');
        modal.classList.remove('open');
        with(document){
            getElementById('name-user').innerHTML = arr[arr.length - 3];
            getElementById('email-user').innerHTML = arr[arr.length - 2];
        }
        alert("Sign up Success!");
    }
});

function checkInfo(){
    var a = document.getElementById("signin-email").value;
    var b = document.getElementById("signin-password").value;

    if(a !== arr[arr.length - 2] || b !== arr[arr.length - 1]){
        alert("Sign in unsuccessful!");
    }
    else if(a === arr[arr.length - 2] && b === arr[arr.length - 1]){
        alert("Sign in successful!");
        regBtn.classList.add('login');
        infoUser.classList.add('active');
        modal.classList.remove('open');
        with(document){
            getElementById('name-user').innerHTML = arr[arr.length - 3];
            getElementById('email-user').innerHTML = arr[arr.length - 2];
        }
    }
}

function logout(){
    regBtn.classList.remove('login');
    infoUser.classList.remove('active');
}

// ============================ VIDEO FILM ===================================== //
const btnWatches = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const filmCloses = document.querySelectorAll('.film-close');

btnWatches.forEach(btnWatch => {
    btnWatch.addEventListener('click', () => {
        const target = document.querySelector(btnWatch.dataset.tabTarget);
        filmCloses.forEach(filmClose => {
            filmClose.addEventListener('click', () => {
                target.classList.remove('active');
            });
        });                
        target.classList.add('active');
    })
});

// ============================ Mode theme ===================================== //
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change',() => {
    // Change the theme of the website
    document.body.classList.toggle('light');
});        

// ======================= Slider header ======================== //
var ctn = 1;
setInterval(() => {
    document.getElementById('radio' + ctn).checked = true;
    ctn++;
    if(ctn > 4){
        ctn = 1;
    }
}, 8000);
