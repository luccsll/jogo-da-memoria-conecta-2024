import alert from "./alert.js"

function keyboard(idOfContainer, idInput) {

    var alertInvalidMatricula = 'alertInvalidMatricula'

    var container = $('#' + idOfContainer)
    var input = $('#' + idInput)

    for (let i = 0; i <= 9; i++) {
        container.append(`<button type="button" role="button" class="keyOfBoard">${i}</button>`)
    }
    container.append(`<button type="button" role="button" class="keyOfBoard"><img src="../public/images/icon/backspace.svg" alt=""></button>`)

    $('.keyOfBoard:not(:last-child)').on('click', function () {
        
        if (input.val().length <= 7) {
            input.val(input.val() + $(this).text())
        } else {
            alert('danger', 'Alerta', 'A matrícula deve conter entre 6 a 8 números. Por favor, corrija e tente novamente.', alertInvalidMatricula)
            
            $('#' + alertInvalidMatricula).addClass('showAlert')
            
            setInterval(function () {
                $('#' + alertInvalidMatricula).removeClass('showAlert')
                
            }, 3000)
        }    
    })

    $('.keyOfBoard:last-child').on('click', function () {
        var currentValue = input.val()
        input.val(currentValue.slice(0, -1))
    })

}

export default keyboard