
        //page accueil
        function startCarousel() {
            anime({
                targets: '.cv-model',
                translateX: [300, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: anime.stagger(500)
            });
        }
        
        document.addEventListener("DOMContentLoaded", startCarousel);