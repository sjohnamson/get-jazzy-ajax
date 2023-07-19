$(document).ready(onReady);

function onReady() {
    // Tells ajax to go 'get' (read) the response from /artist
    $.ajax({
        type: 'GET',
        url: '/artist'
        // Once ajax has the response it will run a loop over the response
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            // each artist is being appended to the artistTable Body
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });

    // TODO Add ajax request for /songs and display on DOM
    $.ajax({
        type: 'GET',
        url: '/song'
        // Once ajax has the response it will run a loop over the response
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let song = response[i];
            // each artist is being appended to the artistTable Body
            $('#songTableBody').append(`
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `);
        }
    });

    $.ajax({
        type: 'GET',
        url: '/albums'
        // Once ajax has the response it will run a loop over the response
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let album = response[i];
            // each artist is being appended to the artistTable Body
            $('#albumsTableBody').append(`
                <tr>
                    <td>${album.title}</td>
                    <td>${album.year}</td>
                </tr>
            `);
        }
    });

}