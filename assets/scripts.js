$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

//Pour retirer le chevron de droite du carousel

<script>
    document.addEventListener('DOMContentLoaded', function () {
        var carouselInner = document.getElementById('carousel-inner');
        var prevButton = document.querySelector('.carousel-control-prev');

        carouselInner.addEventListener('slid.bs.carousel', function () {
            // Vérifier si la première photo est active
            if (carouselInner.querySelector('.carousel-item:first-of-type').classList.contains('active')) {
                prevButton.style.display = 'none'; // Masquer le bouton précédent
            } else {
                prevButton.style.display = 'block'; // Afficher le bouton précédent
            }
        });
    });
</script>