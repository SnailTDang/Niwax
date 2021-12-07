window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.getElementById('loader');
        loader.style.display = 'none';

    }, 1200)
    setTimeout (function() {
        const heroheading = document.querySelector('.hero__heading');
        const herotext = document.querySelector('.hero__text');
        const herobutton = document.querySelector('.hero-btn')
            
        heroheading.classList.add('fadeInUp')
        herotext.classList.add('fadeInUp')
        herobutton.classList.add('fadeUpZoom')

    },1300)

    

})
