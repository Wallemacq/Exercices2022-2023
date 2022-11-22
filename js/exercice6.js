//fonction nommée. Ici le nom est validation.
//appel de la fonction: validation(parametre)
function validation(e){
    var value = e.srcElement.q.value; // ou e.srcElement.elements.q.value
    if(!value){
        var exampleEl = document.getElementById('recherche');
        exampleEl.setAttribute('class', 'form-control is-invalid');
        var popover = new bootstrap.Popover(exampleEl, {'content': 'Tu ne recherches rien...', 'placement': 'top'});
        popover.show();
        e.preventDefault(); // Ne pas prendre en compte l'action par défaut de l'event
    }
}
//fonction anonyme car on ne donne pas de nom à la fonction.

//<form action="blabla" onsubmit="validation(event)"> est équivalent à:
//document.getElementById('monform').onsubmit = function() { validation(event); };

document.getElementById('monform').addEventListener("submit", function(levent) { validation(levent);});
//Différence:
//onsubmit est une propriété d'un élément et donc elle est ici écrasée. N'importe qui peut donc écraser à nouveau la propriété et casser son fonctionnement.
//addEventListener ajoute un listener à un event. Vu qu'il s'agit d'un ajout, on écrase rien.
//Il est donc conseillé d'utiliser la méthode addEventListener MAIS attention aux anciens navigateur (IE < 9) qui ne supportent pas cette méthode.