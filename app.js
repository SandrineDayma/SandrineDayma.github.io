let toggle = document.querySelector('.toggle'); // on récupère la class toggle
let nav = document.querySelector('nav'); // on récupère la balise nav

// quand l'utilisateur va cliquer sur la toggle on va lancer une fonction qui va nous permettre de rajouter une class open sur la nav 
// on saura que le menu est ouvert grace à la présence de cette classe open
toggle.addEventListener ('click',function () {
        nav.classList.toggle('open');
    }
)