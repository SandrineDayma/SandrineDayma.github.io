let toggle = document.querySelector('.toggle'); // on récupère la class toggle
let body = document.querySelector('body'); // on récupère la balise body

// quand l'utilisateur va cliquer sur la toggle on va lancer une fonction qui va nous permettre de rajouter une class open sur le body 
// on saura que le menu est ouvert grace à la présence de cette classe open
toggle.addEventListener ('click',function () {
        body.classList.toggle('open');
    }
)