const nav = document.getElementById('navbar');
const box = document.getElementById('img-display');
console.log(box.offsetHeight)
//nav.className = ('navbar navbar-expand-lg bg-transparent fixed-top');
window.addEventListener('scroll', () => {
    if (window.scrollY >= box.offsetHeight) {
        nav.classList.add("bg-blue");
        nav.classList.remove("bg-transparent");
        //nav.className = ('navbar navbar-expand-lg bg-blue fixed-top');
    } else if (window.scrollY < box.offsetHeight) {
        nav.classList.remove("bg-blue");
        nav.classList.add("bg-transparent");
        //nav.className = ('navbar navbar-expand-lg bg-transparent fixed-top');
    }
});