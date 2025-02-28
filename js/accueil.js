
        //page accueil
        function startCarousel() {
            anime({
                targets: '.cv-model',
                translateX: [300, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 2000,
                delay: anime.stagger(500),
                loop : true
            });
        }
        function flash(){
        anime({
            targets:'.cv-model',
            backgroundColor: ['#ffffff', '#ffdd00', '#ffffff'], // Change la couleur de fond en jaune puis revient à blanc
            duration: 500, 
            easing: 'easeInOutQuad' 
            });
        }
        document.addEventListener("DOMContentLoaded", startCarousel);