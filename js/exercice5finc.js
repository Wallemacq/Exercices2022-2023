function generateRandomGrid(){
    var grille = [];
    while(grille.length != 6){
        var rndInt = Math.floor(Math.random() * 45) + 1;
        if(!grille.includes(rndInt)){
            grille.push(rndInt);
        }
    }
    grille.sort(function(a, b) { return a - b;});
    return grille;
}

function generateGrids(total){
    let grilles_compare = [];
    let grilles = [];
    while(grilles.length != total){
        var grille = generateRandomGrid();
        if(!grilles_compare.includes(grille.toString())){
            grilles_compare.push(grille.toString());
            grilles.push(grille);
        }
    }
    sortGrids(grilles);
    return grilles;
}

function sortGrids(grilles){
    grilles.sort(function(a, b) {
        for(i=0; i <= a.length; i ++){
            if(a[i] == b[i]){
                continue;
            }
            return a[i] - b[i];
        }
    });
}

function prepareGridsElement(grilles) {
    let tables = document.createElement('ul');
    tables.setAttribute('class', 'list-group');
    grilles.forEach(function(row, index){
        let li = document.createElement('li');
        li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center');
        li.textContent = 'Grille numéro ' + (index+1) + ': ';
        let div = document.createElement('div');
        row.forEach(function(col) {
                let span = document.createElement('span');
                span.setAttribute('class', 'badge bg-secondary');
                span.textContent = col;
                div.append(span);
        });
        li.append(div);
        tables.append(li);
    });
    return tables;
}

function init(){
    let total = prompt('Combien de grille de Lotto à générer ?');
    let grilles = generateGrids(total);
    let tables = prepareGridsElement(grilles);
    document.getElementById('lotto').append(tables);
}

init();