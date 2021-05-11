
var price = 15,
    priceEl = document.getElementById('price1'),
    PriceEl = document.getElementById('price1');

    priceEl.textContent = price.toFixed(2);

var price = 13,
    priceEl = document.getElementById('price2'),
    PriceEl = document.getElementById('price2');

    priceEl.textContent = price.toFixed(2);

    var price = 12.50,
    priceEl = document.getElementById('price3'),
    PriceEl = document.getElementById('price3');

    priceEl.textContent = price.toFixed(2);

    var price = 14,
    priceEl = document.getElementById('price4'),
    PriceEl = document.getElementById('price4');

    priceEl.textContent = price.toFixed(2);

    var price = 12,
    priceEl = document.getElementById('price5'),
    PriceEl = document.getElementById('price5');

    priceEl.textContent = price.toFixed(2);

    var price = 15,
    priceEl = document.getElementById('price6'),
    PriceEl = document.getElementById('price6');

    priceEl.textContent = price.toFixed(2);



const showMenu= ( toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


