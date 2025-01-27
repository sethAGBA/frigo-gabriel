// Récupérer les éléments HTML nécessaires
const toggleMenuButton = document.querySelector(".toggle-menu");
const navbar = document.querySelector(".navbar");

// Ajouter un événement de clic sur le bouton "toggle menu"
toggleMenuButton.addEventListener("click", () => {
  // Basculer la classe 'active' sur le menu
  navbar.classList.toggle("active");
});

// Fermer le menu automatiquement si un lien est cliqué
navbar.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navbar.classList.remove("active");
  }
});


//Form checker
const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    const emailField = form.querySelector('input[placeholder="Email"]');
    const email = emailField.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      e.preventDefault();
      alert("Veuillez entrer une adresse e-mail valide.");
    }
  });

// Portfolio Gallery

let filterContainer = document.querySelector(".gallery-filter");
let galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")){
        // deactivates existing active filter item
        filterContainer.querySelector(".active").classList.remove("active");
        // activates new filter item
        event.target.classList.add("active");
        let filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }

});

  //Review Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1200:{
            items:2
        }
    }
})