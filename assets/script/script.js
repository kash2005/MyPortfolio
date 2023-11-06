let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex +1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";

    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex +1;

}

changeText();
setInterval(changeText,3000)






document.addEventListener("DOMContentLoaded", () => {
    const scrollslider = document.getElementById("scrollslider"),
        overlays = document.getElementById("scrolloverlays"),
        alwaysSticky = document.querySelectorAll(".is-alwayssticky"),
        desktopSticky = document.querySelectorAll(".is-desktopsticky");
    let viewportHeight = window.innerHeight;

    const positionStickySupport = () => {
        let el = document.createElement("a"),
            mStyle = el.style;
        mStyle.cssText =
            "position:sticky;position:-webkit-sticky;position:-ms-sticky;";
        return mStyle.position.indexOf("sticky") !== -1;
    };

    if(!positionStickySupport()){
        // sticky polyfill for IE for always sticky elements
        Stickyfill.add(alwaysSticky);
        if(window.innerWidth >= 768){
            Stickyfill.add(desktopSticky);
        }
    }

    const skrollrStart = () => {
        let elH = scrollslider.offsetHeight;
        let winW = window.innerWidth;
        if (
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            scrollslider.classList.remove("no-skrollr");
            skrollr.init({
                forcedHeight: false,
                constants: {
                    distance: elH / 4,
                    distance2: elH / 2,
                    distance3: elH / 4 * 3
                }
            });
        }
    };
    // these are relative to the viewport, i.e. the window
    const mobileScrolling = () => {
        let elOffset = overlays.getBoundingClientRect();
        let top = Math.ceil(elOffset.top / 5) * 5;
        let halfOfViewport = Math.ceil(Math.floor(viewportHeight / 2) / 5) * 5;
        console.log(top, -viewportHeight, -halfOfViewport);
        if (top > 0) {
            scrollslider.setAttribute("data-current", 1);
        } else if (top <= 0 && top >= -viewportHeight) {
            scrollslider.setAttribute("data-current", 2);
        } else if (top <= -viewportHeight && top >= -(viewportHeight * 2)) {
            scrollslider.setAttribute("data-current", 3);
        } else {
            scrollslider.setAttribute("data-current", 4);
        }
    };

    // Fire initially
    window.addEventListener("load", () => {
        skrollrStart();
    });

    // Fire on resize
    window.addEventListener("resize", () => {
        viewportHeight = window.innerHeight;
        skrollrStart();
    });

    window.addEventListener("scroll", () => {
        mobileScrolling();
    });
});



//active menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

//sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll",function (){
    header.classList.toggle("sticky",window.scrollY >50)
})

//------------------------- toggle icon  navBar -------------------------//

let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
}


/*-----------------------paralax---------------------------*/

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else {
            entry.target.classList.remove("show-items")
        }
    })
})

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((e1)=>observer.observe(e1));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((e1)=>observer.observe(e1));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((e1)=>observer.observe(e1));


// contact
function sendEmail(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let address = document.querySelector('#address').value;
    let contact = document.querySelector('#phone').value;
    let message = document.querySelector('#message').value;
    let subject = document.querySelector('#subject').value;

    let body = "Name :" + name + "<br/> Email :" + email + "<br/> Contact Number :" + contact + "<br/> Subject :" + subject + "<br/> Message:"+message;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kashmifernando3@gmail.com",
        Password : "37168C19AC91182C603514C44DE5B5CDC6BB",
        To : 'kashmifernando3@gmail.com',
        From : "kashmifernando3@gmail.com",
        Subject : "This is the subject",
        Body : body
    }).then(
        message => alert(message)
    );
}


// preloader
var loader =document.getElementById("preloader");

window.addEventListener("load",function (){
    loader.style.display = "none";
})