//https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search?console=1
//http://margaine.com/2014/06/28/jsonp-vs-cors.html


function callLyrics(artiste, titre) {
    console.log(artiste);
    console.log(titre);
    $.ajax({
        url: 'https://api.lyrics.ovh/v1/'+artiste+'/'+titre,
        type:'GET',
        dataType: 'json',
        success: function(resultat, statut){
            alert(resultat.lyrics);
        },
        error: function(resultat, statut, erreur){
            alert(erreur);
        }
    });

}

function generateTable(liste) {
    let table = $('<table>');
    table.addClass('table table-striped');
    let header = $('<tr>');
    header.append($('<th>').text('Musique'));
    header.append($('<th>').text('Echantillon'));
    header.append($('<th>').text('Paroles'));
    table.append($('<thead>').append(header));
    let body = $('<tbody>');
    $.each(liste, function(index, value) {
        let row = $('<tr>');
        let title = value.artistName + ": " + value.trackName;
        let audio = $('<audio>');
        audio.attr('src', value.previewUrl);
        audio.attr('type', 'audio/x-m4a');
        audio.attr('controls', true);
        let lyrics = $('<button>');
        lyrics.addClass('lyrics');
        lyrics.text('Lyrics');
        lyrics.attr('data-artist', value.artistName.replace("\'","&apos;"));
        lyrics.attr('data-track', value.trackName.replace("\'","&apos;"));
        row.append($('<td>').text(title));
        row.append($('<td>').append(audio));
        row.append($('<td>').append(lyrics));
        body.append(row);
    });
    table.append(body);
    $("#resultat").html(table);
}

jQuery(document).ready(function(){
    $('#monform').submit(function(e) {
        e.preventDefault();
        var data = $('#monform').serialize();
        $.ajax({
            url: 'https://itunes.apple.com/search', // url à contacter
            type:'GET', // type de requête http. Soit POST soit GET
            dataType:'jsonp', // type de la donnée retournée par l'url qu'on contact
            data: data, // les données à envoyer. Format: macle1=mavaleur1&macle2=mavaleur2&...
            success: function(resultat, statut){ // fonction anonyme exécutée en cas de succès
                generateTable(resultat.results);
                $(".lyrics").click(function(e) {
                    e.preventDefault();
                    callLyrics(this.dataset.artist, this.dataset.track);
                });
            },
        });
    });
});