document.addEventListener("DOMContentLoaded", function () {
    // Premier carrousel : défilement de droite à gauche
    const carousel = document.querySelector('.carousel');
    const clone1 = carousel.cloneNode(true); // Clone le contenu du carrousel
    carousel.appendChild(clone1); // Ajoute le clone pour un effet de défilement continu

    let scrollAmount1 = 0;
    const speed1 = 1;

    function scrollCarousel1() {
        scrollAmount1 -= speed1;

        // Réinitialiser la position de défilement pour éviter les coupures
        if (Math.abs(scrollAmount1) >= carousel.scrollWidth / 2) {
            scrollAmount1 = 0;
        }

        // Appliquer le décalage de défilement
        carousel.style.transform = `translateX(${scrollAmount1}px)`;
        requestAnimationFrame(scrollCarousel1); // Appeler de manière continue
    }

    scrollCarousel1(); // Démarrer le défilement du premier carrousel

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
