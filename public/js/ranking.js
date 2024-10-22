$(document).ready(function () {

    function exibirDadosEmTabela() {
        const dadosJSON = localStorage.getItem('gamePoint');

        if (dadosJSON) {
            const dados = JSON.parse(dadosJSON);
            const tabela = $('#tbodyRanking')

            dados.forEach((item) => {
                var theme

                switch (item.theme) {
                    case 'p':
                        theme = 'Placas'
                        break;
                    case 'v':
                        theme = 'Veículo'
                        break;
                    case 't':
                        theme = 'Projetos Manu & TI'
                        break;
                    case 'l':
                        theme = 'Líderes'
                        break;
                }

                var row = `<tr>
                                <td>4°</td>
                                <td>${item.name}</td>
                                <td>${theme}</td>
                                <td>${item.clicks}</td>
                                <td>${item.time}</td>
                            </tr>`

            tabela.append(row)
            });

        } else {
            console.log('Os dados não foram carregados')
        }
    }

    exibirDadosEmTabela();
})