const menuToggle= document.querySelector('.toggle');
const header = document.querySelector('.header');
const toggleBtn = document.querySelector('.toggle-btn');
const modal = document.querySelector('.modal');
const secondaryToggleBtn = document.getElementsByClassName('toggle-sec');
const backDrop = document.querySelector('.modal-backdrop')
const counters = document.querySelectorAll('.counter');
const counterContainer = document.querySelector('.counter-container');




// counter for customers and tarders.
counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target / 3000;  

            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 1);
            }else{
                counter.innerText = target;
            }
          
        }
        updateCounter();  

});

//To get the scrolling co-ordinates for the fixed header
window.addEventListener('scroll', scrollNav);

function scrollNav(){
    if(window.scrollY > header.offsetHeight + 60){
        header.classList.add('active');
    } else{
        header.classList.remove('active');
    }
}

//



//Toggle Navigation bar

function openToggleNav(){
        modal.style.display = 'block';
        backDrop.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
    backDrop.style.display = 'none';
}

backDrop.addEventListener('click', closeModal);
toggleBtn.addEventListener('click', openToggleNav);


menuToggle.addEventListener('click', openToggleNav);
// 



//Toggle class for toggle button with span
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
});