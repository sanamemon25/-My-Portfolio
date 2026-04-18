let New = document.querySelector(".new");
let nav = document.querySelector(".nav");
let links = document.querySelectorAll(".nav li");
New.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open"); 
});

let typed = new Typed(".typing", {
    strings: ["Frontend Developer", "Calligrapher", "Teacher"],
    typeSpeed: 80,
    backSpeed:50,
    backDelay: 1500,
    loop:true
});

// portfolio section

const buttons = document.querySelectorAll(".portfolio-filters button");
const cards = document.querySelectorAll(".portfolio-card");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        cards.forEach(card => {
            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});