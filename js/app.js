const nav = document.getElementById("navbar");
const box = document.querySelector("main").children[0];
const search = document.getElementById('campoDeBusqueda');
const paquetes = document.getElementById('paquetes');

console.log(box.offsetHeight);
console.log(box);
//nav.className = ('navbar navbar-expand-lg bg-transparent fixed-top');
window.addEventListener("scroll", () => {
  if (window.scrollY >= box.offsetHeight) {
    nav.classList.add("bg-dark");
    nav.classList.remove("bg-transparent");
    //nav.className = ('navbar navbar-expand-lg bg-dark fixed-top');
  } else if (window.scrollY < box.offsetHeight) {
    nav.classList.remove("bg-dark");
    nav.classList.add("bg-transparent");
    //nav.className = ('navbar navbar-expand-lg bg-transparent fixed-top');
  }
});
