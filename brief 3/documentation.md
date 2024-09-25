1. Technologies Utilisées
HTML5 : Structure de base du site.
CSS3 : Stylisation du site avec des animations et transitions.
JavaScript Vanilla : Interactions utilisateur et animations d’écriture.
Fonts Customisées : Utilisation de polices personnalisées pour le design.

2. Arborescence des Dossiers
/brief
│
├── /assets
│   ├── gobelet.png          # Image du gobelet
│   ├── smiley.png           # Image du smiley
│   ├── Vector 111.svg       # SVG utilisé dans le titre
│   ├── Vector 112.svg
│   ├── Vector 113.svg
│   ├── Vector 114.svg
│   ├── ponctuation.png      # Image pour les ponctuations
│
├── /police
│   ├── /made_soulmaze       # Polices 'Soulmaze'
│   └── /stand-rock-font     # Polices 'StandRock'
│
├── index.html               # Page principale du jeu
├── style.css                # Feuille de style principale
└── script.js                # Script d'interaction et animation

3. Les trois textes flottants « AHHH ATTEND », « ON VEUT TE PROPOSER UN JEU », « ARRÊTE DE SCROLL » sont révélés lettre par lettre avec une animation d’écriture.
Responsivité :

5. Explication des Fichiers
index.html : Structure du jeu et de la page web. Il contient les gobelets, le smiley, les vecteurs graphiques du titre et les textes flottants.
style.css : Contient toutes les règles de stylisation, y compris les animations, transitions, et la disposition des éléments. Il est structuré pour s'adapter à différentes tailles d'écran avec des media queries.
script.js :Ce fichier contrôle l’animation de levée des gobelets et la révélation du texte lors du clic, ainsi que l'animation d’écriture pour les textes flottants.

6. Mise en place et Exécution
Télécharger ou cloner le projet.
Ouvrir le fichier index.html dans un navigateur web pour lancer le "jeu".
Pour voir l’interaction, cliquer sur l’un des gobelets après leur mélange.

7. Animation d'Écriture (JavaScript)

// Animation d’écriture pour les textes flottants
const texts = document.querySelectorAll('.floating-text');

texts.forEach((text) => {
    let content = text.textContent;
    text.textContent = '';
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < content.length) {
            text.textContent += content.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100); // Vitesse d'écriture
});


9. Compatibilité
Compatible avec tous les navigateurs modernes (Chrome, Firefox, Edge, Safari).

10. Crédits
Développement : Sakri Katia
Polices : MADE Soulmaze, Stand Rock Font
