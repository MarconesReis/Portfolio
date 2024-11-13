document.addEventListener("DOMContentLoaded", function () {
    // Premier carrousel : défilement de droite à gauche
    const carousel = document.querySelector('.carousel');
    const clone1 = carousel.cloneNode(true); 
    carousel.appendChild(clone1); 

    let scrollAmount1 = 0;
    const speed1 = 1;

    function scrollCarousel1() {
        scrollAmount1 -= speed1;

       
        if (Math.abs(scrollAmount1) >= carousel.scrollWidth / 2) {
            scrollAmount1 = 0;
        }

        
        carousel.style.transform = `translateX(${scrollAmount1}px)`;
        requestAnimationFrame(scrollCarousel1); 
    }

    scrollCarousel1(); 

    // Deuxième carrousel : défilement de gauche à droite
    const carouselConviction = document.querySelector('.second_carousel');
    const clone2 = carouselConviction.cloneNode(true); // Clone le contenu du carrousel
    carouselConviction.appendChild(clone2); // Ajoute le clone pour un effet de défilement continu

    let scrollAmount2 = -carouselConviction.scrollWidth / 2; // Démarre depuis la moitié
    const speed2 = 1; // Ajustez la vitesse selon vos préférences

    function scrollCarousel2() {
        scrollAmount2 += speed2;

        // Réinitialise le défilement une fois la moitié du contenu dépassée
        if (scrollAmount2 >= 0) {
            scrollAmount2 = -carouselConviction.scrollWidth / 2;
        }

        // Applique le décalage de défilement
        carouselConviction.style.transform = `translateX(${scrollAmount2}px)`;
        requestAnimationFrame(scrollCarousel2); // Appelle de manière continue pour le défilement
    }

    scrollCarousel2(); // Démarre le défilement du second carrousel
});

/********************** Carousel Footer ***********************/ 

document.addEventListener("DOMContentLoaded", function () {
    // Deuxième carrousel : défilement de gauche à droite
    const carouselFooter = document.querySelector('.social-media');
    const cloneFooter = carouselFooter.cloneNode(true); // Clone le contenu du carrousel
    carouselFooter.appendChild(cloneFooter); // Ajoute le clone pour un effet de défilement continu

    let scrollAmountFooter = 0;
    const speedFooter = 1; // Ajustez la vitesse selon vos préférences

    function scrollCarouselFooter() {
        scrollAmountFooter -= speedFooter;

        // Réinitialiser la position de défilement pour éviter les coupures
        if (Math.abs(scrollAmountFooter) >= carouselFooter.scrollWidth / 2) {
            scrollAmountFooter = 0;
        }

        // Appliquer le décalage de défilement
        carouselFooter.style.transform = `translateX(${scrollAmountFooter}px)`;
        requestAnimationFrame(scrollCarouselFooter); // Appeler de manière continue
    }

    scrollCarouselFooter(); // Démarre le défilement des réseaux sociaux
});

// Guiartech

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    // Fonction pour changer d'image
    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    // Démarrer le carrousel en boucle
    setInterval(showNextImage, 1800); // Change d'image toutes les 1,8 secondes
});

// Youtube

document.addEventListener("DOMContentLoaded", function () {
    const imagesYoutube = document.querySelectorAll(".carousel-youtube");
    let currentIndexYt = 0;

    // Fonction pour changer d'image
    function showNextImage() {
        imagesYoutube[currentIndexYt].classList.remove("active");
        currentIndexYt = (currentIndexYt + 1) % imagesYoutube.length;
        imagesYoutube[currentIndexYt].classList.add("active");
    }

    // Démarrer le carrousel en boucle
    setInterval(showNextImage, 1800); // Change d'image toutes les 1,8 secondes
});

// Volunteering

document.addEventListener("DOMContentLoaded", function () {
    const imagesVolunteering = document.querySelectorAll(".carousel-volunteering");
    let currentIndexVl = 0;

    // Fonction pour changer d'image
    function showNextImage() {
        imagesVolunteering[currentIndexVl].classList.remove("active");
        currentIndexVl = (currentIndexVl + 1) % imagesVolunteering.length;
        imagesVolunteering[currentIndexVl].classList.add("active");
    }

    // Démarrer le carrousel en boucle
    setInterval(showNextImage, 1800); // Change d'image toutes les 1,8 secondes
});

// Buton Hamburguer 

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav_list");

    hamburger.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});






