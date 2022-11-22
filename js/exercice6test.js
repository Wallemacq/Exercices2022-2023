function verification(monevent) {
    let recherche = document.getElementById('recherche').value;
//  let recherche = event.srcElement.q.value;
    if(recherche === ''){
        alert("Il faut encoder quelque chose !");
        event.preventDefault();
    }
}

//document.getElementById('monform').addEventListener("submit", function(monevent) { verification();});
document.getElementById('monform').addEventListener("submit", verification );
//
// function addEventListener(nom_de_l_event, fonction_a_executer) {
//        ...
//        fonction_a_executer(event);
//
// }