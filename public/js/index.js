import alert from "./components/alert.js"
import keyboard from "./components/keyboard.js";

alert('warning', 'Alerta', 'Matricula não encontrada!', 'alertNotFound')
alert('danger', 'Erro', 'Informe uma matrícula', 'alertReportId')
keyboard('keyboard', 'username')

$(document).ready(function () {
    var url = 'http://localhost/jogo-da-memoria-conecta-2024/backend/dataUsers.txt';

    var buttonStart = $('#buttonStart');
    var fieldUsername = $('#fieldUsername');
    var username = $('#username');

    var alertNotFound = $('#alertNotFound')
    var alertReportId = $('#alertReportId')

    fetch(url)
        .then(response => response.text())
        .then(data => {
            var dataUser = JSON.parse(data);
            var inputShown = false;

            buttonStart.on('click', function (e) {
                e.preventDefault();

                if (!inputShown) {
                    fieldUsername.addClass('showField');
                    inputShown = true;

                } else {
                    buttonStart.attr('type', 'submit');
                    var found = false;

                    if(username.val() == '' || username.val() == null){
                        alertReportId.addClass('showAlert')
                        
                        setInterval(function(){
                            alertReportId.removeClass('showAlert')

                        }, 3000)
                    }

                    for (var user of dataUser) {
                        
                        let id = username.val().length <= 6 && (username.val() != '' || username.val() != null) ? '00' + username.val() : username.val()

                        if (user['ID'] == id) {

                           window.location.href = `./home.php?id=${user['ID']}`
                           
                            found = true;
                            break;
                        }
                    }

                    if (!found) {
                        alertNotFound.addClass('showAlert')
                        
                        setInterval(function(){
                            alertNotFound.removeClass('showAlert')

                        }, 3000)

                        username.val('');
                    }
                }
            });
        });
});