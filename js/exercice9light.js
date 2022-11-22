$(document).ready(function() {
    $('#monform').submit(function(e) {
        e.preventDefault();
        $.ajax({
            method: "GET",
            url: "https://itunes.apple.com/search",
            dataType: 'jsonp',
            data: $('#monform').serialize()
        }).done(function( msg ) {
            let table = $('<table>').addClass('table');
            let head = $('<thead>').append($('<tr>').append($('<th>').text('Artiste')).append($('<th>').text('Titre')).append($('<th>').text('Echantillon')));
            let body = $('<tbody>');

            msg.results.forEach(function(item) {
                let audio = $('<audio>');
                audio.attr('controls', true);
                audio.attr('src', item.previewUrl);
                let line = $('<tr>').append($('<td>').text(item.artistName)).append($('<td>').text(item.trackName)).append($('<td>').append(audio));
                body.append(line);
            });
            table.append(head);
            table.append(body);
            $('#resultat').empty().append(table);

        });

    });
});