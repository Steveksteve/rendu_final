// Sélectionner les gobelets
const gobelets = document.querySelectorAll('.answerPic');

// Ajouter un événement au clic pour chaque gobelet
gobelets.forEach(gobelet => {
    gobelet.addEventListener('click', function() {
        if (this.classList.contains('lifted')) return;

        // Arrêter l'animation en cours
        this.querySelector('img').style.animation = 'none';

        // Ajouter la classe 'lifted' pour soulever le gobelet
        this.classList.add('lifted');

        // Révéler le résultat
        const result = this.querySelector('.result');
        result.style.display = 'block';  // Affiche le résultat
    });
});

// Fonction pour animer l'écriture de texte
function animateText(element, text, speed, callback) {
    let index = 0;
    element.innerHTML = ''; // Vide l'élément avant de commencer l'animation

    function typeWriter() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index); // Ajoute la lettre suivante
            index++;
            setTimeout(typeWriter, speed); // Appelle récursivement la fonction pour la prochaine lettre
        } else if (callback) {
            callback(); // Appelle la prochaine animation après la fin de celle-ci
        }
    }

    typeWriter();
}

// Fonction pour gérer l'animation avec des délais
document.addEventListener('DOMContentLoaded', function() {
    const floatingTexts = document.querySelectorAll('.floating-text');

    if (floatingTexts.length > 0) {
        // Commence avec le premier texte
        const firstText = floatingTexts[0].textContent;
        animateText(floatingTexts[0], firstText, 100, function() {
            // Quand le premier texte est terminé, commence le deuxième
            if (floatingTexts.length > 1) {
                const secondText = floatingTexts[1].textContent;
                animateText(floatingTexts[1], secondText, 100, function() {
                    // Quand le deuxième texte est terminé, commence le troisième
                    if (floatingTexts.length > 2) {
                        const thirdText = floatingTexts[2].textContent;
                        animateText(floatingTexts[2], thirdText, 100);
                    }
                });
            }
        });
    }
});