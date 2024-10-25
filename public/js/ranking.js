$(document).ready(function () {
    var url = 'http://localhost/jogo-da-memoria-conecta-2024/backend/database.txt';
    var tbodyRanking = $('#tbodyRanking');

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var getUsername = urlParams.get('username');

    const factorClicks = 1;
    const factorTime = 1;

    function timeToSeconds(time) {
        const parts = time.split(':');
        return parseInt(parts[0]) * 60 + parseInt(parts[1]);
    }

    function calculateScore(player) {
        const clicks = player.clicks;
        const timeInSeconds = timeToSeconds(player.time);
        return (clicks * factorClicks) + (timeInSeconds * factorTime);
    }

    fetch(url)
        .then(response => response.text())
        .then(data => {
            var formatJSON = data.slice(0, -1);
            formatJSON = '[' + formatJSON + ']';
            data = JSON.parse(formatJSON);
            console.table(data);

            data.forEach(player => {
                player.score = calculateScore(player);
            });

            data.sort((a, b) => a.score - b.score);

            var ct = 1
            var position = 1
            data.forEach(point => {
                var username = point['name'];
                var theme;

                switch (point['theme']) {
                    case 'p':
                        theme = 'Placas';
                        break;
                    case 'v':
                        theme = 'Veículos';
                        break;
                    case 't':
                        theme = 'Projeto Manu & TI';
                        break;
                    case 'l':
                        theme = 'Líderes';
                        break;
                }

                if (ct <= 3) {

                    switch (ct) {
                        case 1:
                            $('#nameWinner1').text(point['name'])
                            $('#nameWinner2-click').text(point['clicks'])
                            $('#nameWinner2-min').text(point['time'])
                            break;
                        case 2:
                            $('#nameWinner2').text(point['name'])
                            break;
                        case 3:
                            $('#nameWinner3-click').text(point['clicks'])
                            $('#nameWinner3-min').text(point['time'])
                            $('#nameWinner3').text(point['name'])
                            break;
                    }

                } else {
                    var struct = `<tr${username == getUsername ? " class='itsMe'" : ""}>
                                    <td>${position}°</td>
                                    <td>${username == getUsername ? 'Você' : point['name']}</td>
                                    <td>${theme}</td>
                                    <td>${point['clicks']}</td>
                                    <td>${point['time']}</td>
                                </tr>`;

                    tbodyRanking.append(struct);
                }
                ct++
                position++
            });
        })
        .catch(error => console.error('Erro ao carregar o arquivo:', error));


    setInterval(function () {
        $('.skeletonRow').hide();
    }, 500);
});
