window.addEventListener("scroll", function() {
    console.log("Hola")
    const header = document.querySelector(".head");
    header.classList.toggle("abajo", window.scrollY>0)
})
console.log("Hola")
