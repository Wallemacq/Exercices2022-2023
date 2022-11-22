let prenom = window.prompt('Quel est votre prénom ?');
console.log(prenom);
let homme = confirm('Est-ce que vous êtes un homme ?');
console.log(homme);
let civilite = null;

if (homme === true) {
    civilite = 'Monsieur';
}
else {
    civilite = 'Madame';
}
document.getElementById('welcome').className = 'alert alert-info';
document.getElementById('welcome').innerHTML = 'Bonjour ' + civilite + ' ' + prenom;

//Dict
let civdict = {true: 'Monsieur', false: 'Madame'};
document.getElementById('welcome').innerHTML = 'Bonjour ' + civdict[homme] + ' ' + prenom;

//Ternaire
civilite = homme ? 'Monsieur' : 'Madame';
document.getElementById('welcome').innerHTML = 'Bonjour ' + civilite + ' ' + prenom;