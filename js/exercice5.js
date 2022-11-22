let total = prompt('Combien de grille de Lotto à générer ?');
console.log(total);
let lotto = document.getElementById('lotto');
let grilles = [];
while(grilles.length != total){
    var grille = [];
    while(grille.length != 6){
        var rndInt = Math.floor(Math.random() * 45) + 1;
        if(!grille.includes(rndInt)){
            grille.push(rndInt);
        }
    }
    grille.sort(function(a, b) { return a - b;});
    if(!grilles.includes(grille.toString())){
        grilles.push(grille.toString());
    }
}
grilles = grilles.map(function(row) {
    return row.split(',').map(function(col) {
        return Number(col);
    });
});
grilles.sort(function(a, b) {
    for(i=0; i <= a.length; i ++){
        if(a[i] == b[i]){
            continue;
        }
        return a[i] - b[i];
    }
});
console.log("Grilles triées");

//let tables = '<ul class="list-group">';
let tables = document.createElement('ul');
tables.setAttribute('class', 'list-group');
grilles.forEach(function(row, index){
    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center');
    li.textContent = 'Grille numéro ' + (index+1) + ': ';
//    tables += '<li class="list-group-item d-flex justify-content-between align-items-center">';
//    tables += 'Grille numéro ' + (index+1) + ': <div>';
    let div = document.createElement('div');
    row.forEach(function(col) {
            let span = document.createElement('span');
            span.setAttribute('class', 'badge bg-secondary');
            span.textContent = col;
//            tables += "<span class='badge bg-secondary'>" + col + '</span> ';
            div.append(span);
    });
    li.append(div);
//    tables += '</div></li>';
    tables.append(li);
});
//tables += '</ul>';
//lotto.innerHTML = tables;
lotto.append(tables);
console.log("Rendu html terminé");